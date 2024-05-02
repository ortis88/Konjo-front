<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    name:'headerCom',
    data(){
        return{
            isMenuOpen:false,
            navList:[
                {
                    name:"About",
                    path:'/about'
                },
                {
                    name:"My-UFO",
                    path:'/customize'
                },
                {
                    name:"Shop",
                    path:'/shop'
                },
            ]
        }
    },
    mounted(){
        const menuState = this.isMenuOpen;
        console.log(menuState);
    },
    methods:{
        handelMenu(){
            this.isMenuOpen ? true:false;
        },
        clickBurger(){
            console.log('有按到');
        }
    }
}
</script>

<template>
    <header>
        
        <div id="logo">
            <img src="@/assets/image/SadUFO-logo.png">
        </div>

        <nav>
            <input type="checkbox"
            id="burger-switch"
            class="burger-checked"
            ref="burgerSwitch"
            style="display: none;">

            <label for="burger-switch" id="burger-btn"
            @click="clickBurger">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <div id="menu-area">
                <div id="menu-list"
                v-show="handelMenu">
                    <h1>MENU</h1>
                    <ul>
                        <li>
                            <RouterLink to="/about">About</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/customize">MyUFO</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/shop">Shop</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
</template>

<style lang="scss">
@import "@/assets/sass/component/header.scss";
</style>