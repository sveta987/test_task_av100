<template>
  <div class="m-[20px]">
      <div class="container ml-[210px]">
      <div class="restSettings flex flex-row mt-[30px]">
        <h3 class="subheading">Прочие настройки</h3>
        <div class="flex flex-col container">
          <div class="ml-[60px] flex flex-row justify-between w-[73%]">
            <label for="cities">Часовой пояс</label>
            <VueMultiselect class="w-[120%] ml-[10px]"
              v-model="selected"
              :options="options"
              deselect-label=""
              select-label=""
              selected-label=""
              :searchable="false"
              :allow-empty="false">
            </VueMultiselect>
          </div>
          <div
            class="autoUpdate mt-[30px] ml-[60px] flex justify-between w-[73%] border-b-gray-300 border-b-[1px] pb-[20px]">
            <div>
              <input type="checkbox" v-model="autoUpdate" id="autoUpdate" class="accent-[#2DC574] cursor-pointer">
              <label for="autoUpdate" class="text-[10px] align-middle">
                Автоматически переходить к новым объявлениям
              </label>
            </div>
            <ExclamationCircleIcon class="w-[17px] h-[17px] cursor-help text-gray-400" @mouseenter="mouseOverHelp = true"
                                   @mouseleave="mouseOverHelp = false"/>
            <div v-show="mouseOverHelp" class="absolute bottom-[10%] left-[45%]">
              <div class="arrow-up"></div>
              <div class="w-[370px] bg-[#2DC574] rounded-[5px] p-[5px]">
                <p class="text-white text-[12px] text-center">Лента будет автоматически обновляться 1 раз в 3 секунды</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="notification flex flex-row mt-[40px]">
        <h3 class="subheading">Оповещения о новых <br/> подборках</h3>
        <div class=" container ml-[35px]">
          <p class=" text-sm text-gray-400">Выберите, куда будут приходить уведомления при появлении <br/> автомобилей,
            которые подходят под критерии вашей подборки.</p>
          <h5 class="my-[25px] font-bold text-[15px]">Уведомления</h5>
          <div class="flex flex-col">
            <div class="py-[15px] w-[73%]">
              <input type="radio" :id="'off'" :name="'off'" v-model="notification"
                     :value="'off'"
                     class="accent-green-600 h-[15px]">
              <label :for="'for'" class=" ">
                Выкл
              </label>
            </div>
            <div class="border-y-[1px] py-[15px] flex justify-between w-[73%]">
              <div>
                <input type="radio" :id="'email'" :name="'email'" v-model="notification"
                       :value="'email'"
                       class="accent-green-600 h-[15px] w-[20px]">
                <label :for="'email'">
                  Email
                </label>
              </div>
              <div>
                <pencil
                  v-show="!isOpenInput.inputNames.includes('email')"
                  class="cursor-pointer"
                  @click="openInput('email')"
                />
                <input v-show="isOpenInput.inputNames.includes('email')" v-model="email" type="text"
                       class="inputStyle !my-[0px]">
              </div>
            </div>
            <div class="py-[15px] flex justify-between w-[73%]">
              <div>
                <input type="radio" :id="'telegram'" :name="'telegram'" v-model="notification"
                       :value="'telegram'"
                       class="accent-green-600 h-[15px] w-[20px]">
                <label :for="'telegram'" class=" ">
                  Telegram ID
                </label>
              </div>
              <div>
                <pencil
                  v-show="!isOpenInput.inputNames.includes('telegram')"
                  class="cursor-pointer"
                  @click="openInput('telegram')"
                />
                <input v-show="isOpenInput.inputNames.includes('telegram')" v-model="telegram" type="text"
                       class="inputStyle !my-[0px]">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="account flex flex-row mt-[30px]">
        <h3 class="subheading">Учётная запись</h3>
        <div class="container ml-[90px] text-sm">
          <div class="mb-[10px] w-[100%]">
            <label for="company">Компания</label>
            <input type="text" id="company" v-model="company" class="inputStyle ml-[10px] w-[60%]">
          </div>
          <div class="mb-[10px] w-[100%]">
            <label for="login">Логин</label>
            <input type="text" id="login" v-model="login" class="inputStyle ml-[36px] w-[60%]">
          </div>
          <div class="mb-[10px] w-[100%]">
            <label for="phone">Номер <br/> телефона</label>
            <input type="text" id="phone" v-model="phone" class="inputStyle ml-[15px] w-[60%]">
          </div>
          <div class="mb-[10px] w-[100%]">
            <label for="name">Имя</label>
            <input type="text" id="name" v-model="name" class="inputStyle ml-[48px] w-[60%]">
          </div>
          <div class="mb-[10px] w-[100%]">
            <label for="surname">Фамилия</label>
            <input type="text" id="surname" v-model="surname" class="inputStyle ml-[17px] w-[60%]">
            <p class="text-gray-400 text-[10px] flex justify-center">* Не обязательно</p>
          </div>
        </div>
      </div>
      <div class=" sip flex flex-row">
        <h3 class="subheading">Звонок через SIP</h3>
        <label class="inline-flex relative  mr-5 cursor-pointer">
          <input type="checkbox" value="" v-model="callFromSIP" class="sr-only peer" checked>
          <div
            class="w-11 h-6 bg-white rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] border-[1px] after:border-gray-500 border-gray-500 peer-checked:border peer-checked:border-[#2DC574] peer-checked:after:bg-[#2DC574] after:border peer-checked:after:border-[#2DC574] after:rounded-full after:h-5 after:w-5 after:transition-all peer"></div>
        </label>
        <p class="ml-3 text-sm text-gray-400">Включите эту функцию чтобы Авито и другие площадки не <br/> блокировали ваш
          аккаунт. Будет выглядеть так, будто звонки ,<br/> совершаются с разных номеров.</p>
      </div>
      <button class="w-[65%] rounded-[5px] text-white bg-[#2DC574] py-[5px] mt-[20px]" @click="submitForm"> Сохранить
      </button>
    </div>
  </div>
  <div v-if="isUpdate" class="absolute top-[5%] left-[50%] bg-[#2DC574]">
    <h4 class="text-white p-[15px]">Сохранено</h4>
  </div>
</template>

<script>
import Pencil from "@/assets/Icons/Pencil";
import {ExclamationCircleIcon, ChevronDownIcon} from '@heroicons/vue/24/outline';

import VueMultiselect from 'vue-multiselect'
import { CheckIcon } from '@heroicons/vue/24/outline'

import axios from "axios";

export default {
  name: 'App',
  components: {
    VueMultiselect,
    CheckIcon,
    ExclamationCircleIcon,
    ChevronDownIcon,
    Pencil
  },
  data() {
    return {
      id: null,
      token: null,
      callFromSIP: false,
      company: '',
      login: '',
      phone: '',
      name: '',
      surname: '',
      notification: 'off',
      telegram: '',
      email: '',
      autoUpdate: false,
      mouseOverHelp: false,
      isOpenInput: {
        inputNames: [],
        isOpen: false,
      },
      isUpdate: false,
      selected: null,
      options: ['Калининград', 'Москва', 'Самара', 'Екатеринбург', 'Омск', 'Красноярск', 'Иркутск', 'Якутск', 'Владивосток', 'Магадан', 'Камчатка']
    }
  },
  methods: {
    openInput(value) {
      this.isOpenInput.inputNames.push(value);
      this.isOpenInput.isOpen = true;
    },
    submitForm() {
      axios
        .put('https://api.av100.ru/v3/user/' + this.id,
          {
            login: this.login,
            email: this.email,
            telegramChat: this.telegram,
            fname: this.name,
            lname: this.surname
          },
          {
            headers: {
              "content-type": 'text/json',
              "X-User-Token": this.token,
              "X-Api-Key": '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
              "X-Device-OS": 'chrome'
            }
          }
        )
        .then(
          this.isUpdate = true,
          setTimeout(() => {
            this.isUpdate = false
          }, 3000)
        )
      ;
    }
  },
  mounted() {
    this.id = '1902384';
    this.token = 'efece37f-f55f-4431-89dc-5943b10c1976';
    this.selected = this.options[0];
  }
}
</script>
<style src="./assets/styles/multiselect.css"></style>
<style>
.arrow-up {
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #2DC574;
  margin-left: 50%;
}
</style>
