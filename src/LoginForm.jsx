import { useForm } from "react-hook-form";
import Field from "./components/Field";
import FieldSet from "./components/FieldSet";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (formData) => {
    const user = {
      email: "jubayer@ex.com",
      password: "123456",
    };

    const found =
      user.email === formData.email && user.password === formData.password;

    if (!found) {
      setError("root.notFound", {
        type: "notFount",
        message: `User with the email '${formData.email}' not found`,
      });
    }
  };

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <FieldSet label={"Login"}>
          <Field error={errors.email}>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              id="email"
              placeholder="Email Address or Phone number"
              className="text-lg py-2 px-4 rounded-md border outline-none focus:ring border-gray-300 ring-blue-500 w-full"
            />
          </Field>
          <Field error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be greater or equal 6",
                },
                maxLength: {
                  value: 12,
                  message: "Password must be less or equal 12",
                },
              })}
              type="password"
              placeholder="Password"
              className="text-lg py-2 px-4 rounded-md border outline-none focus:ring border-gray-300 ring-blue-500 w-full mt-3"
            />
          </Field>

          <Field>
            <button className="w-full py-2 bg-myBlue mt-3 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-600/95 cursor-pointer">
              Log in
            </button>
          </Field>
        </FieldSet>
      </form>
      <div className="my-3"> {errors?.root?.notFound?.message} </div>
      <a
        href="#"
        className="text-center text-myBlue my-3 block border-b pb-3 border-gray-300 w-full hover:underline"
      >
        Forgotten Password
      </a>
      <button className="px-4 mx-auto py-2 bg-green-600 mt-3 text-white font-semibold rounded-md cursor-pointer">
        Create New Account
      </button>
    </>
  );
};
export default LoginForm;
