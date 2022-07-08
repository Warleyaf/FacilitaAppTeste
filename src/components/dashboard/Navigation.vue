<template>
  <nav class="navigation">
    <div class="logo">
      <img src="../../assets/logodash.png" alt="" />
    </div>

    <ul>
      <a href="#">
        <li>
          <font-awesome-icon icon="fa-solid fa-chart-column" size="2xl" />
          <p>Dashboard</p>
        </li>
      </a>

      <a href="#">
        <li>
          <font-awesome-icon icon="fa-solid fa-circle-check" size="2xl" />
          <p>Tarefas</p>
        </li>
      </a>

      <a href="#">
        <li>
          <font-awesome-icon icon="fa-solid fa-gears" size="2xl" />
          <p>Configurações</p>
        </li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>