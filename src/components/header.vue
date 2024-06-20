<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    name:'headerCom',
    data(){
        return{
            isMenuOpen:false, 
            navLinks:[
                {to:'/',text:'News'},
                {to:'/',text:'About'},
                {to:'/',text:'Trainer'},
                {to:'/member',text:'Member'}
            ],
            isUserLogin:"",
        }
    },
    mounted(){
        
    },
    methods:{
        checkMenuState(){
        },
        clickBurger(){
            this.isMenuOpen ? true:false;
            const checkMenuState=this.isMenuOpen;
            console.log(checkMenuState);
        },
        toTop(){
            window.scrollTo ({
                top:0,
                behavior:'smooth'
            })
        }
    }
}
</script>

<template>
    <header>
        
        <div class="logo" @click="isMenuOpen=false">
            <RouterLink to="/" @click="toTop">
                <img src="@/assets/image/LogoRow.png">
            </RouterLink>
        </div>

        <div class="desktop-nav">
            <nav>
                <div class="nav-list">
                    <ul>
                        <li v-for="(links,index) in navLinks" :key="index"><RouterLink :to=links.to class="nav-link">{{ links.text }}</RouterLink></li>
                    </ul>
                </div>
            </nav>
            <RouterLink to="/member" class="login-btn">Login</RouterLink>
        </div>

        <div class="mobile-burger">

            <input type="checkbox"
            id="burger-switch"
            class="burger-checked"
            ref="burgerSwitch"
            style="display: none;"
            v-model="isMenuOpen"
            >
    
            <label for="burger-switch" 
            id="burger-btn"
            @click="clickBurger"
            >
                <span></span>
                <span></span>
                <span></span>
            </label>
    
            <div id="menu-window" v-if="isMenuOpen">
                <div id="menu-area" @click="isMenuOpen=false">
                    <div id="link-list">
                        <ul>
                            <li id="menu-title">
                                MENU
                            </li>
                            <li>
                                <RouterLink to="/member" class="menu-login">Login</RouterLink>
                            </li>
                            <li v-for=" links in navLinks">
                                <RouterLink 
                                :to= links.to class="menu-link"
                                @click="isMenuOpen=false">
                                {{ links.text }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>

    </header>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/component/header.scss";
</style>