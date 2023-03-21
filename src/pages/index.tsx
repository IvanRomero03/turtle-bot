import { type NextPage } from "next";
import Head from "next/head";
import ImageProcessor from "~/components/ImageProcesor";
import Instructions from "~/components/Instructions/Instructions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import axios from "axios";
import { type Axios } from "axios";

const apiURL = "https://turtle-backend.vercel.app/api";
//const apiURL = "http://localhost:8000/";

const Home: NextPage = () => {
  const [svg, setSvg] = useState<string | undefined>(undefined);
  const handleSubmit = async (values: { code: string }) => {
    console.log(values?.code);
    if (!values?.code) {
      return;
    }
    const {
      data,
      status,
    }: {
      data: { svg?: string; hash?: string; verified: boolean };
      status: number;
    } = await axios.post(apiURL, {
      text: values?.code,
    });
    // const {} = await axios.post(apiURL, {
    //   text: values?.code,
    // }); // as { status: number; data: { svg: string; hash?: string } };
    if (status === 200) {
      if (data) {
        if (data?.verified == true) {
          console.log("Verified");
          if (data?.svg) {
            setSvg(data?.svg as string | undefined);
          }
        } else {
          console.log("Not verified");
          alert("Input not valid");
        }
      }
    }
    // if (response?.status === 200) {
    //   console.log(response?.data);
    //   if (response?.data) {
    //     if (response?.data?.svg) {
    //       setSvg(response?.data?.svg as string | undefined);
    //     }
    //   }
    // }
    // console.log(response);
    // } else if (response?.data?.svg) {
    //   console.log(response?.data?.svg);
    //   setSvg(response?.data?.svg as string | undefined);
    // }
  };
  return (
    <>
      <Head>
        <title>Turtle Bot</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="my-5 flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Turtle Bot</h1>
        <p className="text-2xl font-bold">
          Ivan Alberto Romero Wells - A00833623
        </p>
        <p className="text-lg">
          This is a simple web app that allows you to control a turtle bot using
          a custom made language.
        </p>
        <div className="flex w-[96vw] justify-center p-8">
          <Instructions />
          <ImageProcessor svgLiteral={svg} />
        </div>
        <Formik initialValues={{ code: "" }} onSubmit={handleSubmit}>
          <Form className="flex w-6/12 flex-col">
            <label htmlFor="code" className="text-2xl font-bold">
              Input
            </label>
            <Field
              as="textarea"
              name="code"
              className="h-3xl min-h-3xl w-full border-2 border-gray-800 p-4 text-justify"
            />
            <ErrorMessage name="code" />
            <button
              type="submit"
              className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </main>
    </>
  );
};

export default Home;
