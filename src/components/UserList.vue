<template>
  <div class="container">
    <div class="page-title">
      <h3>{{ message }}</h3>
    </div>
    <div class="row">
      <div
        class="col-md-4"
        v-for="user in users"
        :key="user.id"
        data-user="user"
      >
        <div class="m-portlet m-portlet--full-height">
          <div class="m-portlet__body">
            <div class="tab-content">
              <div class="tab-pane active" id="m_widget4_tab1_content">
                <div class="m-widget4 m-widget4--progress">
                  <div class="m-widget4__item">
                    <div class="m-widget4__img m-widget4__img--pic">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""
                      />
                    </div>
                    <div class="m-widget4__info">
                      <span class="m-widget4__title"> {{ user.name }} </span>
                      <br />
                      <span class="m-widget4__sub">
                        {{ user.title }}
                      </span>
                    </div>
                    <div class="m-widget4__ext">
                      <button
                        @click="deleteUser(user)"
                        class="btn btn-primary"
                        data-cy="taskDelete"
                        id="deleteForm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <form id="form" @submit.prevent="createUser">
        <input id="new-user" v-model="newUser" class="form-control" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ["message"],
  data() {
    return {
      newUser: "",
      users: [
        {
          id: 1,
          name: "Anna Strong",
          title: "Software Engineer",
        },
        {
          id: 2,
          name: "John Doe",
          title: "Technical Writer",
        },
      ],
    };
  },
  methods: {
    createUser() {
      this.users.push({
        id: 3,
        name: this.newUser,
        title: "Crypto Expert",
      });
      this.newUser = "";
    },

    deleteUser(user) {
      const newList = this.users.filter((u) => user.id !== u.id);
      this.users = newList;
    },
  },
};
</script>
