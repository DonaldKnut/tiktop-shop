"use client";
import React, { useEffect, useState } from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  QuerySnapshot,
  DocumentData,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/counter";

type ExpenseItem = {
  name: string;
  price: string;
  id: string;
};

type ExpenseTrackerPageProps = {};

const ExpenseTrackerPage = (props: ExpenseTrackerPageProps) => {
  const [expenseItems, setExpenseItems] = useState<ExpenseItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [newExpenseItem, setNewExpenseItem] = useState<ExpenseItem>({
    name: "",
    price: "",
    id: "",
  });

  const deleteExpenseItem = async (itemId: string) => {
    await deleteDoc(doc(db, "items", itemId));
  };

  useEffect(() => {
    const expenseItemsQuery = query(collection(db, "items"));
    const unsubscribe = onSnapshot(
      expenseItemsQuery,
      (querySnapshot: QuerySnapshot<DocumentData>) => {
        const updatedExpenseItems: ExpenseItem[] = [];

        querySnapshot.forEach((doc) => {
          updatedExpenseItems.push({
            ...(doc.data() as ExpenseItem),
            id: doc.id,
          } as ExpenseItem);
        });

        setExpenseItems(updatedExpenseItems);

        const calculateTotalAmount = () => {
          const totalPrice = updatedExpenseItems.reduce(
            (sum, item) => sum + parseFloat(item.price),
            0
          );
          setTotalAmount(totalPrice);
        };
        calculateTotalAmount();
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const handleAddExpenseItem = async (event: React.FormEvent) => {
    event.preventDefault();
    if (newExpenseItem.name !== "" && newExpenseItem.price !== "") {
      await addDoc(collection(db, "items"), {
        name: newExpenseItem.name.trim(),
        price: newExpenseItem.price,
      });
      setNewExpenseItem({ name: "", price: "", id: "" });
    }
  };

  return (
    <div>
      <div className="m-auto text-center">
        <Button
          size="sm"
          variant="secondary"
          asChild
          className="px-0 font-normal w-1/5 h-10"
        >
          <Link href="/settings">
            <LuHome className="text-2xl" />
          </Link>
        </Button>
      </div>
      <Counter />
      <h1 className="text-4xl p-4 text-center text-white">Expense Tracker</h1>
      <div className="bg-white p-4 rounded-lg max-w-5xl m-auto">
        <form
          onSubmit={handleAddExpenseItem}
          className="grid grid-cols-6 items-center text-white"
        >
          <input
            value={newExpenseItem.name}
            onChange={(event) =>
              setNewExpenseItem({
                ...newExpenseItem,
                name: event.target.value,
              })
            }
            type="text"
            placeholder="Enter Item"
            className="col-span-3 p-3 border text-black"
          />
          <input
            value={newExpenseItem.price}
            onChange={(event) =>
              setNewExpenseItem({
                ...newExpenseItem,
                price: event.target.value,
              })
            }
            type="number"
            placeholder="Amount $"
            className="col-span-2 p-3 border mx-3 text-black"
          />
          <button
            className="text-white bg-orange-400 hover:bg-orange-500 p-3 text-xl flex items-center justify-center rounded-sm"
            type="submit"
          >
            <FaCircleChevronRight />
          </button>
        </form>
        <ul>
          {expenseItems.map((item, index) => (
            <li
              key={index}
              className="my-4 w-full flex justify-between bg-black text-white"
            >
              <div className="p-4 w-full flex justify-between">
                <span className="capitalize">{item.name}</span>
                <span>${item.price}</span>
              </div>
              <button
                onClick={() => deleteExpenseItem(item.id)}
                className="ml-8 p-4 border-l-2 border-slate-900 hover:bg-orange-200 w-16 text-red-700"
              >
                <MdCancel />
              </button>
            </li>
          ))}
        </ul>
        {expenseItems.length < 1 ? (
          ""
        ) : (
          <div className="flex justify-between p-3">
            <span>Total</span>
            <span>${totalAmount}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseTrackerPage;
