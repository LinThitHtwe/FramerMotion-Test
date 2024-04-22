"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="px-32">
      <div className="mt-24 min-h-[50vh] grid grid-cols-2 place-content-center">
        <div>
          <h1 className="text-7xl font-semibold tracking-tighter">
            Empowering Tomorrow's Visionaries Today
          </h1>
          <p className="text-2xl pl-2 max-w-[80%] mt-2 tracking-tight opacity-80">
            Igniting the spark of innovation in today's dreamers, shaping a
            brighter future for all
          </p>
          <button className="bg-yellow-400 p-3 ml-2 mt-3 rounded-xl font-medium">
            Learn More
          </button>
        </div>
        <div className="">
          <Image
            alt=""
            src={
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
            className="size-full rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 mt-48 place-content-center">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
            rotate: "-90deg",
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            rotate: "0deg",
          }}
          transition={{
            type: "spring",
          }}
        >
          <Image
            alt=""
            src={
              "https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
            className="object-cover rounded-xl"
          />
        </motion.div>
        <div className="gird place-content-center ">
          <motion.h1
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              delay: 0,
            }}
            className="text-3xl font-semibold"
          >
            Something About This
          </motion.h1>
          <motion.p
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              delay: 0.15,
            }}
            className="max-w-[80%] opacity-80 mt-5"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            cupiditate, aliquid quibusdam laborum suscipit accusamus ea fuga,
            deserunt consectetur tempore dignissimos obcaecati delectus alias
            reprehenderit molestias harum, recusandae aperiam corporis.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-48 place-content-center">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
            rotate: "-90deg",
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            rotate: "0deg",
          }}
          transition={{
            type: "spring",
          }}
        >
          <Image
            alt=""
            src={
              "https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
            className="object-cover rounded-xl"
          />
        </motion.div>
        <div className="gird place-content-center ">
          <motion.h1
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              delay: 0,
            }}
            className="text-3xl font-semibold"
          >
            Something About This
          </motion.h1>
          <motion.p
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              delay: 0.15,
            }}
            className="max-w-[80%] opacity-80 mt-5"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            cupiditate, aliquid quibusdam laborum suscipit accusamus ea fuga,
            deserunt consectetur tempore dignissimos obcaecati delectus alias
            reprehenderit molestias harum, recusandae aperiam corporis.
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-24 place-content-center">
        <div>
          <Image
            alt=""
            src={
              "https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="gird place-content-center ">
          <h1 className="text-3xl font-semibold">Something About This</h1>
          <p className="max-w-[80%] opacity-80 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            cupiditate, aliquid quibusdam laborum suscipit accusamus ea fuga,
            deserunt consectetur tempore dignissimos obcaecati delectus alias
            reprehenderit molestias harum, recusandae aperiam corporis.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-24 place-content-center mb-56">
        <div className="gird place-content-center ">
          <h1 className="text-3xl font-semibold">Something About This</h1>
          <p className="max-w-[80%] opacity-80 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            cupiditate, aliquid quibusdam laborum suscipit accusamus ea fuga,
            deserunt consectetur tempore dignissimos obcaecati delectus alias
            reprehenderit molestias harum, recusandae aperiam corporis.
          </p>
        </div>
        <div>
          <Image
            alt=""
            src={
              "https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
