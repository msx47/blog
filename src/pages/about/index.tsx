import Link from "next/link";
import React from "react";
import Footer from "../../components/footer/footer";
import CustomHead from "../../components/head";
import Layout from "../../components/layout";

type Props = {};

function index({}: Props) {
  return (
    <Layout
      render={(theme) => {
        return (
          <>
            <CustomHead
              uri="https://mohits.dev/about"
              description="Mohit is a software engineer. He writes about JavaScript, TypeScript, Node.JS, CSS, GraphQL and C++"
              title="About me - Mohit's Blog"
              image="https://mohits.dev/favicon/favicon.png"
            />
            <div className="2xl:w-7/12 xl:w-8/12 md:w-10/12 w-95-res mx-auto mb-2">
              <div className="px-4 pt-4 justify-between border-primary-accent-light border-l-2">
                <section>
                  <h1 className="translate-x-[-6px] text-4xl md:text-7xl md:leading-[4rem] text-primary-text-light dark:text-primary-text-dark py-4">
                    Hello, I'm Mohit
                  </h1>
                  <p className="xl:max-w-xl max-w-full leading-[1.8em] text-primary-text-light dark:text-light-gray py-2">
                    I am a software engineer from India. I mostly work with web
                    technologies and ocassionaly with low level stuff. This
                    website is my personal{" "}
                    <Link href="/blog">
                      <a className="text-primary-text-light dark:text-light-gray border-b-4 border-primary-accent-light hover:bg-primary-accent-light transition-all duration-200 dark:hover:text-primary-light">
                        blog
                      </a>
                    </Link>{" "}
                    where I (try to) post about things I learn. I also do open
                    source{" "}
                    <a
                      href="/#projects"
                      className="border-b-4 border-primary-accent-light hover:bg-primary-accent-light hover:text-white transition-all duration-200"
                    >
                      projects
                    </a>{" "}
                    where I build random things that I find interesting. I also
                    like cats 🐱
                  </p>
                  <p className="xl:max-w-xl max-w-full leading-[1.8em] text-primary-text-light dark:text-light-gray py-2">
                    I have worked with various clients and companies, mostly on
                    stuff related to JavaScript and it's surrounding ecosystem.
                    I am a life-long learner and like learning new things and
                    acquiring new perspective on things. I am{" "}
                    <span
                      title="as of Feb' 2022"
                      className="border-dotted border-b-2 border-primary-dark dark:border-primary-light"
                    >
                      currently
                    </span>{" "}
                    learning about <i>three.js</i> and graphics programming in
                    general.
                  </p>
                  <p className="xl:max-w-xl max-w-full leading-[1.8em] text-primary-text-light dark:text-light-gray py-2">
                    I have been recently looking for a full-time role
                    <strong> -preferably remote-</strong>, so if you'd like to
                    work with me then please reach out to me on twitter{" "}
                    <a
                      href="https://twitter.com/_msx47"
                      className="text-primary-text-light dark:text-light-gray border-b-4 border-primary-accent-light hover:bg-primary-accent-light transition-all duration-200 dark:hover:text-primary-light"
                      referrerPolicy="no-referrer"
                      rel="noopener"
                    >
                      @_msx47
                    </a>{" "}
                    or on discord @msx47#7906
                  </p>
                </section>
                <aside>
                  <h2 className="mt-4 text-2xl dark:text-white font-bold text-primary-text-light inline-block border-b-2 border-primary-accent-light">
                    view my resume
                  </h2>
                  <br />
                  <a
                    className="p-0 my-2 inline-block text-primary-accent-light font-bold hover:underline focus-visible:underline focus-visible:bg-primary-accent-light transition-all duration-200"
                    href="https://firebasestorage.googleapis.com/v0/b/fir-auth-4f7e7.appspot.com/o/Mohit%20Srivastava%20Resume.docx?alt=media&token=2294d8aa-68c2-4a57-a57f-b1c70279e3e0"
                    rel="noopener"
                    referrerPolicy="no-referrer"
                  >
                    view as docx
                  </a>
                  <br />
                  <a
                    className="p-0 my-2 inline-block text-primary-accent-light font-bold hover:underline focus-visible:underline focus-visible:bg-primary-accent-light transition-all duration-200"
                    href="https://firebasestorage.googleapis.com/v0/b/fir-auth-4f7e7.appspot.com/o/Mohit%20Srivastava%20Resume.pdf?alt=media&token=39d4f4a6-70a1-4afb-948b-2231aac6d782"
                    rel="noopener"
                    referrerPolicy="no-referrer"
                  >
                    view as pdf
                  </a>
                </aside>
              </div>
            </div>
            <Footer theme={theme} />
          </>
        );
      }}
    />
  );
}

export default index;
