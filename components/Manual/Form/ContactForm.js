import { Mail, MapPin, Phone } from "lucide-react";
import BlurredBackgroundImage from "../blurred-background-image";
export default function ContactForm() {
  return (
    <div id='contact-form' className="relative" >
      <BlurredBackgroundImage
        src="/contactbg.jpg"
        alt="Background image"
      >
        <div className='flex md:mx-16 mx-5 py-16 gap-10 justify-between flex-col-reverse md:flex-row '>
          <div className='md:w-1/2 w-full'>
            <form  >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm  text-gray-300 "
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block bg-white w-full rounded-md shadow-sm md:h-12 sm:text-sm p-2"
                  placeholder="Name"
                />
              </div>

              <div className='md:flex gap-5'>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-300 "
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full bg-white rounded-md md:h-12 sm:text-sm p-2"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="phone"
                    className="block text-sm  text-gray-300 "
                  >
                    Your Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="mt-1 block w-full bg-white rounded-md shadow-sm md:h-12 sm:text-sm p-2"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full bg-white rounded-md shadow-sm md:h-28 resize-none sm:text-sm p-2"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className=" bg-Stext text-white font-medium py-2 px-4 mt-8 rounded-md hover:bg-StextH transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className='md:w-1/2 w-full mt-5 flex flex-col'>
            <h2 className='text-white text-center md:text-left font-bold text-4xl'>Contact <span className='text-Stext'>Us</span></h2>
            <p className='text-gray-200 mb-8 mt-6'>For question,technical assistance,or collaboration opportunity via the contact information provided</p>
            <div className='flex mb-3 items-center gap-3'>
              <div className='text-white   rounded-full bg-Stext'>
                <Phone className="w-10 h-10 p-2" />
              </div>
              <p className='text-gray-200'>+1212121212</p>
            </div>
            <div className='flex mb-3 items-center gap-3'>
              <div className='text-white  rounded-full bg-Stext'>
                <Mail className='p-2 w-10 h-10' />
              </div>

              <p className='text-gray-200'>111111111@gmail.com</p>
            </div>
            <div className='flex  items-center gap-3'>
              <div className='text-white  rounded-full bg-Stext'>
                <MapPin className=' w-10 h-10 p-2' />
              </div>
              <p className='text-gray-200'>Banani,Dhaka,Bangladesh</p>
            </div>
          </div>
        </div>
      </BlurredBackgroundImage>
      <div className="flex md:hidden justify-center"><div className="w-20 h-1 bg-Ttext mt-6 md:mt-8"></div></div>
    </div>
  );
}
