<template>
  <div class="excluir-task">
    <div class="excluir-con-can">
      <div class="trash">
        <font-awesome-icon icon="fa-regular fa-trash-can" />
      </div>
      <p>Tem certeza que deseja <span>excluir</span> esta tarefa?</p>
      <span class="sub-delete">Esta ação não poderá ser desfeita.</span>

      <div class="btn-del">
        <button class="cancel">Cacelar</button>
        <button class="confirm">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteTask",
};
</script>