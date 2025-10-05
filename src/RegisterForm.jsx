import { useFieldArray, useForm } from "react-hook-form";
import Field from "./components/Field";
import FieldSet from "./components/FieldSet";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <FieldSet label={"Register "}>
          <Field error={errors.email}>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              name="email"
              type="email"
              id="email"
              placeholder="Email Address "
              style={{
                borderColor: errors.email ? "red" : "gray",
              }}
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
              name="password"
              type="password"
              placeholder="Password"
              style={{
                borderColor: errors.password ? "red" : "gray",
              }}
              className="text-lg py-2 px-4 rounded-md border outline-none focus:ring border-gray-300 ring-blue-500 w-full mt-3"
            />
          </Field>

          <h2 className="mt-3 text-lg">Add social link</h2>

          {fields.map((field, i) => {
            console.log(field);

            return (
              <div key={field.id} className="flex gap-2">
                <Field error={errors.socials && errors.socials[i]?.message}>
                  <input
                    {...register(`socials[${i}].name`)}
                    id={`socials[${i}].name`}
                    name={`socials[${i}].name`}
                    type="text"
                    placeholder="Social Name"
                    style={{
                      borderColor: errors[field.name] ? "red" : "gray",
                    }}
                    className="text-lg py-2 px-4 rounded-md border outline-none focus:ring border-gray-300 ring-blue-500 w-full mt-3"
                  />
                </Field>{" "}
                <Field error={errors.socials && errors.socials[i]?.message}>
                  <input
                    {...register(`socials[${i}].url`)}
                    id={`socials[${i}].url`}
                    name={`socials[${i}].url`}
                    type="text"
                    placeholder="Social url"
                    className="text-lg py-2 px-4 rounded-md border outline-none focus:ring border-gray-300 ring-blue-500 w-full mt-3"
                  />
                </Field>
                <button
                  onClick={() => remove(i)}
                  title="Remove"
                  className="text-lg p-2 cursor-pointer rounded-md "
                >
                  -
                </button>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() =>
              append({
                name: "",
                url: "",
              })
            }
            className="w-1/2 mx-auto py-1 mt-2 text-white font-semibold rounded-md bg-gray-600 hover:bg-gray-600/95 cursor-pointer"
          >
            Add new link
          </button>

          <Field>
            <button className="w-full py-2 bg-myBlue mt-3 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-600/95 cursor-pointer">
              Register now
            </button>
          </Field>
        </FieldSet>
      </form>

      <button className="px-4 mx-auto py-2 bg-green-600 mt-3 text-white font-semibold rounded-md cursor-pointer">
        Already Have and account
      </button>
    </>
  );
};
export default RegisterForm;
