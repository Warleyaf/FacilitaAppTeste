<template>
  <section>
    <Navigation />
    <main>
      <div>
        <Profile />
        <div class="group">
          <Categorias />
          <div class="todo">
            <div class="todolist">
              <SearchTodo />
              <ListTodo />
            </div>
            <AddTask />
          </div>
        </div>
      </div>
    </main>
    <DeleteTask />
    <IncluirTask />
  </section>
</template>

<script>
  import Navigation from "./Navigation.vue";
  import Profile from "./Profile.vue";
  import Categorias from "./Categorias.vue";
  import SearchTodo from "./SearchTodo.vue";
  import ListTodo from "./ListTodo.vue";
  import AddTask from "./AddTask.vue";
  import DeleteTask from "./DeleteTask.vue";
  import IncluirTask from "./IncluirTask.vue";
  export default {
    name: "Dashboard",
    components: {
      Navigation,
      Profile,
      Categorias,
      SearchTodo,
      ListTodo,
      AddTask,
      DeleteTask,
      IncluirTask,
    },
  };
</script>

<style src="./styles.styl" lang="styl"/>








/* <font-awesome-icon icon="fa-solid fa-chart-column" />
      <font-awesome-icon icon="fa-solid fa-circle-check" />
      <font-awesome-icon icon="fa-solid fa-gears" /> */