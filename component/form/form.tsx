
"use client";

import {  Checkbox, Label, TextInput, Textarea } from "flowbite-react";

export default function FormComponent() {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto">
        <p className="text-2xl font-bold text-black">Contact Us</p>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="FullName" value="Your FullName" />
        </div>
        <TextInput id="email2" type="email" placeholder="justin bie ber" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="message" value="Your message" />
        </div>
        <Textarea id="message" placeholder="text here" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <button className="text-white p-4 rounded font-bold bg-gray-700">Submit</button>
    </form>
  );
}

