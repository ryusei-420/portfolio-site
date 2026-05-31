const form = document.querySelector("#contact form");
const error = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get("メールアドレス").trim();
  const message = formData.get("お問い合わせ内容").trim();

  if (email === "" && message === "") {
    error.textContent = "メールアドレスとお問い合わせ内容を入力してください";
    error.hidden = false;
    return;
  }

  if (email === "") {
    error.textContent = "メールアドレスを入力してください";
    error.hidden = false;
    return;
  }

  if (message === "") {
    error.textContent = "お問い合わせ内容を入力してください";
    error.hidden = false;
    return;
  }

  error.hidden = true;
  form.submit();
});
