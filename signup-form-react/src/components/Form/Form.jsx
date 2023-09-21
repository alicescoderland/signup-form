import formStyle from "../Form/Form.module.css";
import { useForm } from "react-hook-form";
import { errorMessage } from "../../store/ui";
import Title from "../Title/Title";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert("Your account was created successfully!");

  return (
    <div className={formStyle.container}>
      <Title />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className={formStyle.input}
            {...register("email", {
              required: true,
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: errorMessage.email.message,
              },
            })}
            style={{
              borderColor:
                errors.email?.type === "required" ? "red" : "initial",
            }}
            placeholder="Your email"
          />
          {errors.email?.type === "pattern" && (
            <small className={formStyle.error}>{errors.email.message}</small>
          )}
        </div>

        <div>
          <input
            className={formStyle.input}
            {...register("password", {
              required: true,
              pattern: {
                value: /^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message: errorMessage.password.message,
              },
            })}
            type="password"
            style={{
              borderColor:
                errors.password?.type === "required" ? "red" : "initial",
            }}
            placeholder="Your password"
          />
          {errors.password?.type === "pattern" && (
            <small className={formStyle.error}>{errors.password.message}</small>
          )}
        </div>

        <div>
          <input
            className={formStyle.checkbox}
            type="checkbox"
            {...register("checkbox", {
              required: {
                value: true,
                message: errorMessage.checkbox.message,
              },
            })}
          />
          <span className={formStyle.checkbox}>
            *I agree with the Privacy Policy
          </span>
          {errors.checkbox?.type === "required" && (
            <small className={formStyle.error}>{errors.checkbox.message}</small>
          )}
        </div>

        <div>
          <button type="submit" className={formStyle.signupButton}>
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
