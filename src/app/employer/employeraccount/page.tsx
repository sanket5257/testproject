"use client";
import Employersidebar from "../../components/Employersidebar";
import EmployerHeader3 from "../../components/EmployerHeader3";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-white min-h-screen text-black w-full font-Montserrat">
      <EmployerHeader3 />
      <div className="flex bg-white pt-20 sm:pt-16 items-center justify-center">
        <div className="min-h-screen md:px-20 md:w-[70vw] w-full shadow-2xl">
          <div className="md:text-lg pt-10 text-sm text-gray-500 w-full flex items-center justify-start gap-16">
            <div className="rounded-full overflow-hidden">
              <Image
                className="md:size-36 size-10 "
                src="../employerimg/employeraccount.jpeg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-black font-bold text-xl mb-4">
                Vardhaman Textile
              </h1>
              <h3 className="font-bold">
                Name <span className="font-medium"> : Jhon Doe</span>{" "}
              </h3>
              <h3 className="font-bold">
                Designation <span className="font-medium">: Manger</span>{" "}
              </h3>
            </div>

            <Image
              className="size-7 mb-4 ml-[12vw]"
              src="../accountimg/eyeborw.png"
              alt=""
            />
          </div>
          <div className="flex pt-10 gap-8">
            <div>
              <div className="flex gap-2 pb-2">
                <Image
                  className="size-5"
                  src="../accountimg/location.png"
                  alt=""
                />
                <h3>Kolhapur</h3>
              </div>
              <div className="flex gap-2 pb-2">
                <Image
                  className="size-5"
                  src="../accountimg/gender.png"
                  alt=""
                />
                <h3>johndoe@gmail.com</h3>
              </div>
              <div className="flex gap-2 pb-2">
                <Image
                  className="size-5"
                  src="../accountimg/agegroup.png"
                  alt=""
                />
                <h3>+91 00000 00000</h3>
              </div>
            </div>

            <div>
              <div className="flex gap-2 pb-2">
                <Image
                  className="size-5"
                  src="../accountimg/email.png"
                  alt=""
                />
                <h3>416 115</h3>
              </div>
              <div className="flex gap-2 pb-2">
                <Image
                  className="size-5"
                  src="../accountimg/whatsapp.png"
                  alt=""
                />
                <h3>10340 02300</h3>
              </div>
              <div className="flex gap-2 pb-2">
                <Image
                  className="size-5"
                  src="../accountimg/construction.png"
                  alt=""
                />
                <h3>www.textilevoice.com</h3>
              </div>
            </div>
          </div>
          <div className="pt-5 text-gray-500">
            <h3 className="font-bold">
              Name <span className="font-medium"> : Jhon Doe</span>{" "}
            </h3>
            <h3 className="font-bold">
              Designation <span className="font-medium">: Manger</span>{" "}
            </h3>
            <h3 className="font-bold">
              Designation <span className="font-medium">: Manger</span>{" "}
            </h3>
          </div>
          <div id="about" className="text-gray-500 pt-4">
            <h1 className="text-start text-xl font-bold">About</h1>
            <p className="md:text-lg">
              {" "}
              Im John Doe, a dedicated professional from Kolhapur with a strong
              interest in [insert field or industry]. I am eager to apply my
              skills in [specific job/role] and contribute to a dynamic team.
              With a keen eye for detail and excellent problem-solving
              abilities.
            </p>
          </div>
        </div>

        <div
          id="sidebar"
          className="relative h-full ml-2 bg-white w-[28vw] hidden md:block"
        >
          <Employersidebar />
        </div>
      </div>
    </div>
  );
};

export default Page;
