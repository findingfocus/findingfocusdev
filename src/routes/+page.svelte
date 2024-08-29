<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import {sineIn} from "svelte/easing";
    // let activeClass = 'dark:text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
    let activeClass = ''
</script>

<h1 class="text-3xl hover:text-sky-400">findingfocus.productions Svelte/Tailwind</h1>
<!--<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>-->

<Navbar let:NavContainer color="primary" class="fixed bottom-0 md:bottom-auto w-full dark:bg-transparent text-right m-0 p-0">
    <NavContainer class="flex justify-end  md:justify-start px-5 py-2 rounded-lg bg-gradient-to-b from-[#4D5578] to-[#1F2336] dark:bg-gray-600">
        <NavBrand href="/">
<!--            <img src="icon.svg" class="me-3 h-6 sm:h-9" alt="Logo" />-->
            <span class="self-center whitespace-nowrap text-xl font-century-gothic squished-font block md:hidden">FINDING FOCUS</span>
        </NavBrand>
        <NavHamburger class="white dark:hover:bg-gray-800"/>
            <NavUl {activeClass} slideParams={{delay: 150, duration: 500, easing: sineIn}}>
                <NavLi class="" href="/">Home</NavLi>
                <NavLi href="about">About Us</NavLi>
                <NavLi href="/work">Our Work</NavLi>
                <NavLi href="/contact">Contact Us</NavLi>
            </NavUl>
    </NavContainer>
</Navbar>