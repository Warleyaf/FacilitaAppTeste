<template>
  <div class="todo-search">
    <strong>Minhas Tarefas</strong>
    <p>
      Olá <span>Warley Afonso</span>, você tem <span>4 tarefas</span> pendentes.
    </p>
    <div class="buscar">
      <input type="text" placeholder="Buscar Tarefas" />
      <button>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass " />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchTodo",
};
</script>