import { useState } from "react";
import { Button, FormControl,FormErrorMessage,FormLabel,Heading,Input, Textarea, Text, useToast } from '@chakra-ui/react'
import { sendContactForm } from "@lib/api";

const initValues = { name: "", email: "", subject: "", message: "" }

const initState = {values: initValues}

export default function Contact() {
  const toast = useToast()
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState({})

  const {values, isLoading, error} = state;

  const onBlur = ({target}) => setTouched((prev) => ({...prev,
    [target.name]:true
  }))

  const handleChange = ({ target }) =>  setState((prev) => ({
    ...prev, 
    values: {
      ...prev.values,
      [target.name]: target.value,
    },
  }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading:true
    }));

    try{
      await sendContactForm(values);
      setTouched({})
      setState(initState);
      toast({
        title: "Message sent.",
        status: "Success",
        duration: 2000,
        position: "top",
      })
    }
    catch(error){
      setState((prev) => ({
        ...prev,
        isLoading:false,
        error:error.message
      }));
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center" id="contact">
      <div className="w-full">
        <div className="__title mb-4 text-center">Contact us</div>
        <div className="max-w-lg mx-auto">
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}
          
          <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={values.name}
                errorBorderColor="red.300"
                onChange={handleChange}
                onBlur={onBlur}
                className="ring-1 ring-zinc-400 pl-2 rounded-md py-1 w-full"
                required
              />
              <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
        
          <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={values.email}
                errorBorderColor="red.300"
                onChange={handleChange}
                onBlur={onBlur}
                placeholder="Enter your email"
                className="ring-1 ring-zinc-400 pl-2 rounded-md py-1 w-full"
                required
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={5}>
              <FormLabel>Subject</FormLabel>
              <Input
                type="text"
                name="subject"
                value={values.subject}
                errorBorderColor="red.300"
                onChange={handleChange}
                onBlur={onBlur}
                placeholder="Enter your subject"
                className="ring-1 ring-zinc-400 pl-2 rounded-md py-1 w-full"
                required
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                id=""
                cols="30"
                rows={4}
                value={values.message}
                errorBorderColor="red.300"
                onChange={handleChange}
                onBlur={onBlur}
                className="ring-1 ring-zinc-400 rounded-md p-2 w-full"
                placeholder="message"
              ></Textarea>
              <FormErrorMessage>Required</FormErrorMessage>
              <div className="flex justify-center items-start">
                <Button 
                  type="submit" 
                  isLoading={isLoading}
                  disabled={!values.name || !values.email || !values.subject || !values.message}
                  onClick={onSubmit} 
                  className="__sbmt px-4">Submit</Button>
              </div>
              </FormControl>
            </div>
      </div>
    </section>
  );
}
