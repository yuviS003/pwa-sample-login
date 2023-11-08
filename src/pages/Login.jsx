import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsShieldLock } from "react-icons/bs";
import logo from "../assets/logo.png";

const Login = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-start md:pt-28 bg-blue-50">
      {toggle ? (
        <motion.div
          className="rounded-lg shadow-lg shadow-gray-500 w-full h-screen md:h-auto md:w-[80%] md:max-w-[20rem] p-10 flex flex-col items-center justify-center gap-6 py-14 bg-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
          }}
        >
          <div className="w-40 md:w-48 h-16">
            <img src={logo} alt="logo" />
          </div>
          <span className="font-openSans text-xl font-medium">LOGIN</span>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={BsShieldLock} />
              </InputLeftElement>
              <Input type="text" placeholder="Type your username" />
            </InputGroup>
          </FormControl>
          <Button
            width="100%"
            colorScheme="blue"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          >
            LOGIN
          </Button>
        </motion.div>
      ) : (
        <motion.div
          className="rounded-lg shadow-lg shadow-gray-500 w-full h-screen md:h-auto md:w-[80%] md:max-w-[20rem] p-10 flex flex-col items-center justify-center gap-6 py-14 bg-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
          }}
        >
          <div className="w-40 md:w-48 h-16">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-openSans text-xl font-medium">
              VERIFY OTP
            </span>
            <span className="text-sm text-blue-700 font-medium">Yuvraj</span>
          </div>
          <FormControl>
            <FormLabel>Enter OTP</FormLabel>
            <HStack>
              <PinInput otp autoFocus>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </FormControl>
          <Button
            width="100%"
            colorScheme="green"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          >
            VERIFY OTP
          </Button>
          <span className="w-full text-xs font-medium text-gray-400 cursor-pointer hover:text-gray-600 transition">
            Didn&apos;t receive any OTP? Click to resend.
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default Login;
