import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Image from "next/image";
import akm from "../public/akm.jpg";
import coden from "../public/codingninjas.svg";
import design from "../public/leetcode.png";
import cf from "../public/code-forces.svg";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Head>
        <title>Ankit Kumar Mishra Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Ankit&apos;s Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1A8KyAXxL37bm5WfdADv5d-cvNJDe1r5j/view" // Add your resume link here
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ankit Kumar Mishra
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Competitive Programmer and Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              CSE student at GGSIPU, pre-final year, passionate about web development and competitive programming.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://x.com/Its_Ankit_Akm">
                <AiFillTwitterCircle className="hover:text-teal-500 transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/itsankitakm/">
                <AiFillLinkedin className="hover:text-teal-500 transition duration-300" />
              </a>
              <a href="https://github.com/itsAnkitAkm">
                <AiFillGithub className="hover:text-teal-500 transition duration-300" />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 scale-up">
              <Image src={akm} layout="fill" objectFit="cover" alt="Ankit Kumar Mishra" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Data Structures and Algorithms (DSA)</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              With a track record of solving <span className="text-teal-500">700+</span> problems on platforms like LeetCode, CodingNinjas, and Codeforces, I specialize in algorithmic solutions and data structures. I&apos;m passionate about exploring the intricate world of algorithms and their practical applications.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Let&apos;s connect and discuss how my expertise can contribute to your team!
            </p>
          </div>
        </section>
        <section className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:shadow-2xl transition-shadow duration-300">
            <a href="https://leetcode.com/itsankitakm" className="profile-link">
              <Image src={design} width={100} height={100} className="profile-image" alt="LeetCode Profile" />
            </a>
            <h3 className="text-lg font-medium pt-8 pb-2">LeetCode Profile</h3>
            <img src="https://leetcard.jacoblin.cool/itsankitakm" alt="LeetCode Stats" width="400" height="150" />
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:shadow-2xl transition-shadow duration-300">
            <a href="https://www.naukri.com/code360/profile/Itsankit" className="profile-link">
              <Image src={coden} width={100} height={100} className="profile-image" alt="Coding Ninjas Profile" />
            </a>
            <h3 className="text-lg font-medium pt-8 pb-2">Coding Ninjas Profile</h3>
            <p className="py-2">
              I hold DSA badges ranging from Master to Achiever, with expertise in topics like arrays, backtracking, binary trees, and more.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:shadow-2xl transition-shadow duration-300">
            <a href="https://codeforces.com/profile/Itsankitakm" className="profile-link">
              <Image src={cf} width={100} height={100} className="profile-image" alt="Codeforces Profile" />
            </a>
            <h3 className="text-lg font-medium pt-8 pb-2">Codeforces Profile</h3>
            <p className="py-2">
              With a Codeforces rating of 1100, I enjoy tackling algorithmic challenges.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I’ve created various digital solutions, including food-delivery platforms and personalized portfolios.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Feel free to explore the details, and if you have any questions, don’t hesitate to reach out.
            </p>
          </div>
         <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-cover"
          layout="responsive"
          width={1800}
          height={1100}
          src={web1}
          alt="Project 1"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-cover"
          layout="responsive"
          width={1800}
          height={1100}
          src={web2}
          alt="Project 2"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-cover"
          layout="responsive"
          width={1800}
          height={1100}
          src={web3}
          alt="Project 3"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-cover"
          layout="responsive"
          width={1800}
          height={1100}
          src={web4}
          alt="Project 4"
        />
      </div>
            
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white">Contact Me</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Feel free to reach out!
          </p>
          <form action="/submit" method="post" className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md w-full"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <style jsx>{`
        .profile-link {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .profile-link:hover {
          transform: scale(1.1);
        }

        .profile-image {
          border-radius: 50%;
        }

        .scale-up {
          animation: scaleUp 1s ease-in-out infinite alternate;
        }

        @keyframes scaleUp {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
