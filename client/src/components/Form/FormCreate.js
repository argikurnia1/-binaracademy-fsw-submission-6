import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../utils/apiUrl/apiUrl";
import { ToastContainer, toast } from "react-toastify";

const usernameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val };
  }
};

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val };
  }
};

const expReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val };
  }
};

export default function FormCreate() {
  let navigate = useNavigate();

  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
  });

  const [expState, dispatchExp] = useReducer(expReducer, {
    value: 0,
  });

  const usernameChangehandler = (e) => {
    dispatchUsername({ type: "USER_INPUT", val: e.target.value });
  };

  const emailChangehandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
  };

  const passwordChangehandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });
  };

  const expChangehandler = (e) => {
    dispatchExp({ type: "USER_INPUT", val: e.target.value });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    console.log(
      usernameState.value,
      emailState.value,
      passwordState.value,
      expState.value
    );

    const resp = await fetch(`${apiUrl}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameState.value,
        email: emailState.value,
        password: passwordState.value,
        exp: expState.value,
      }),
    });

    const data = await resp.json();

    if (resp.status === 201) {
      toast(`${data.result}`);
    } else {
      toast(`${data.result}`);
    }

    dispatchUsername({ type: "USER_INPUT", val: "" });
    dispatchEmail({ type: "USER_INPUT", val: "" });
    dispatchPassword({ type: "USER_INPUT", val: "" });
    dispatchExp({ type: "USER_INPUT", val: 0 });

    navigate(`/`);
  };

  return (
    <>
      <ToastContainer />
      <div className="px-2 sm:px-4 py-2.5">
        <form
          className="container flex flex-col flex-wrap justify-between mx-auto"
          onSubmit={submithandler}
        >
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Username"
              onChange={usernameChangehandler}
              value={usernameState.value}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              onChange={emailChangehandler}
              value={emailState.value}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Password"
              onChange={passwordChangehandler}
              value={passwordState.value}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Exp
            </label>
            <input
              type="number"
              id="Exp"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Exp"
              onChange={expChangehandler}
              value={expState.value}
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create User
          </button>
        </form>
      </div>
    </>
  );
}
