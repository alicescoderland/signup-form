import titleStyles from "./Title.module.css";

function Title() {
  return (
    <div className={titleStyles.container}>
      <h1>Pets's friends</h1>
      <p>Create your account in a second!</p>
      <p>Sign Up</p>
    </div>
  );
}

export default Title;
