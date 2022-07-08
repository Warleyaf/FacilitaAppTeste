<template>
  <div class="incluir-task">
    <div class="register-task">
      <strong>Cadastrar Tarefa</strong>
      <form action="">
        <label for="">Titulo:</label>
        <input type="text" />

        <label for="">Descrição:</label>
        <textarea style="resize: none" cols="30" rows="6"></textarea>
      </form>

      <div class="radio-priority">
        <input type="radio" />
        <label for="">Urgente</label>

        <input type="radio" />
        <label for="">Importante</label>
      </div>
      <button class="add">Adicionar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncluirTask",
};
</script>