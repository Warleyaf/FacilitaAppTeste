<template>
  <div class="list-todo">
    <ul>
      <li>
        <div class="btn-checked">
          <button>
            <div></div>
          </button>
          <p>Planejar desenvolvimento do app TodoList</p>
        </div>

        <div class="pri-btn">
          <div class="prioridade"><span>Urgente</span></div>
          <button class="btn-edit">
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </button>
        </div>

        <div class="edit-task">
          <div class="edit-delete">
            <div>
              <button>Editar</button>
              <button>Excluir</button>
            </div>
            <a href="#"
              ><font-awesome-icon icon="fa-solid fa-ellipsis-vertical"
            /></a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListTodo",
};
</script>