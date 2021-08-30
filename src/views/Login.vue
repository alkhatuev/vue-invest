<template>
    <form class="card auth-card">
  <div class="card-content">
    <span class="card-title center">Авторизация</span>
    <div class="input-field">
      <input
          id="email"
          type="text"
          class="validate"
      >
      <label for="email">Имя пользователя</label>
      <small class="helper-text invalid">Имя пользователя</small>
    </div>
    <div class="input-field">
      <input
          id="password"
          type="password"
          class="validate"
      >
      <label for="password">Придумайте пароль</label>
      <small class="helper-text invalid">Пароль</small>
    </div>
    <div class="input-field">
      <input
          id="email"
          type="text"
      >
      <label for="email">Email</label>
      <small class="helper-text invalid">Email</small>
    </div>
  </div>
  <div class="political"><p class="center">
      <label>
        <input type="checkbox" />
        <span>Я принимаю <a href="/">условия</a> использования Investio</span>
      </label>
    </p></div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться 
        
      </button>
    </div>

    <p class="center">
        Есть уже аккаунт?
      <a href="/">Войти</a>
      <p class="center">
    </p>
      <a href="/">GOOGLE ACCOUNT</a>
      <a href="/">ВКОНТАКТЕ</a>
      <a href="/">FACEBOOK</a>
      <a href="/">GITHUB</a>

  </div>
</form>
</template>