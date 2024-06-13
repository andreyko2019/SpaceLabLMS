<template>
  <section class="dashboard">
    <div class="container">
      <div class="dashboard__history"></div>

      <div class="dashboard__edit">
        <div class="dashboard__edit-row">
          <div class="dashboard__edit-avatar">
            <div class="dashboard__edit-photo">
              <BaseImage :src="userAvatar" alt="avatar" />
            </div>

            <BaseButton
              class="dashboard__edit-delete"
              type="button"
              text="Видалити фотографію"
            />
          </div>

          <div class="dashboard__edit-fullname">
            <FormInput label="Прізвище" name="lastname" />

            <FormInput label="Ім'я" name="username" />

            <FormInput label="По батькові" name="middle-name" />
          </div>
        </div>

        <form class="dashboard__edit-column">
          <BaseInpFile label="file" name="file" />
          <FormInput label="Telegram" name="telegram" />
          <FormInput label="Email" name="email" />
          <FormInput label="Телефон" name="telephone" />
          <FormInput label="Дата народження" name="birthday" />
          <FormInput label="Поточне становище" name="current-situation" />
          <FormInput label="Освіта" name="education" />
          <FormInput label="Робота" name="work" />
          <FormInput label="Рівень англійської" name="english-level" />
          <FormInput label="Статус" name="status" />
          <FormInput label="Курс" name="course" />
          <FormInput label="Пароль" name="password" />
          <FormInput label="Повтор пароля" name="repeat-password" />
        </form>
      </div>

      <div class="dashboard__save">
        <BaseButton class="dashboard__save-btn" type="submit" text="Зберегти" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BaseImage,
  FormInput,
  BaseInpFile,
  userAvatar,
  BaseButton,
} from '@spacelablms/components'


// import Swal from 'sweetalert2'

// const updateUserInfo = () => {
//   Swal.fire({
//     title: 'Ви впевнені що хочете відправити дані для зміни?',
//     icon: 'warning',
//     showDenyButton: true,
//     // showCancelButton: true,
//     confirmButtonText: 'Так',
//     denyButtonText: `Скасувати`,
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire('Дані відправлені', '', 'success')
//         .then(() => {
//           patchData()
//         })
//         .catch((error) => {
//           console.error(error)
//         })
//     } else if (result.isDenied) {
//       Swal.fire('Дані для відправки скасовані', '', 'info')
//     }
//   })
// }
//
// const patchData = () => {
//   console.log(123)
// }
</script>

<style lang="scss">
@import './styles';
</style>
