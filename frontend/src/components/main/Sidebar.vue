<style lang="scss" scoped>
  .sidebar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 40px 40px;
    background-color: white;

    .top-section {
      display: flex;
      flex-direction: column;
      align-items: center;

      .icon-container {
        width: 120px;
        height: 120px;
        margin: 30px 0;
        padding: 30px;
        font-size: 50px;
        background-size: cover;
        background-image: url('https://minnanoonline.s3.ap-northeast-1.amazonaws.com/default-profile.png');
        border-radius: 25px;
      }
    }

    .middle-section {
      display: flex;
      width: 300px;
      flex-direction: column;
      align-items: center;
      background-color: #EDF1F5;
      padding: 40px 0;
      margin-top: 50px;
      border-radius: 25px;

      .menu-list {
        width: 120px;
        cursor: pointer;
        font-size: 14px;

        &:not(:last-child) {
          margin-bottom: 30px;
        }

        & span {
          margin-left: 20px;
        }

        &.selected {
          color: #EE4645;
        }

        &.logout {
          margin-top: 100px;
        }
      }
    }
  }
</style>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar"
})
</script>

<template>
  <div class="sidebar-container">
    <section class="top-section">
      <h3>Boichan-Management</h3>
      <div class="icon-container">
      </div>
      <div>Endratno Alvin</div>
    </section>

    <div class="middle-section">
      <div class="menu-list selected">
        <font-awesome-icon icon="home" />
        <span>Home</span>
      </div>

      <div class="menu-list">
        <font-awesome-icon icon="tasks" />
        <span>My Task</span>
      </div>

      <div class="menu-list">
        <font-awesome-icon icon="mail-bulk" />
        <span>Inbox</span>
      </div>

      <div class="menu-list">
        <font-awesome-icon icon="project-diagram" />
        <span>All Tasks</span>
      </div>

      <div class="menu-list logout">
        <font-awesome-icon icon="sign-out-alt" />
        <span>Sign Out</span>
      </div>
    </div>
  </div>
</template>