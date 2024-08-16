<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import {sineIn} from "svelte/easing";
    let activeClass = 'dark:text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
</script>

<h1 class="text-3xl hover:text-sky-400">FindingFocus.dev Svelte/Tailwind</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Navbar let:NavContainer color="primary" class="dark:bg-transparent">
    <NavContainer class="px-5 py-2 rounded-lg bg-gradient-to-b from-[#4D5578] to-[#1F2336] dark:bg-gray-600">
        <NavBrand href="/">
            <img src="icon.svg" class="me-3 h-6 sm:h-9" alt="Logo" />
            <span class="self-center whitespace-nowrap text-xl font-semibold"></span>
        </NavBrand>
        <NavHamburger class="white dark:hover:bg-gray-800"/>
            <NavUl {activeClass} slideParams={{delay: 150, duration: 400, easing: sineIn}}>
                <NavLi href="/">About Me</NavLi>
                <NavLi href="/programming">Programming</NavLi>
                <NavLi href="/streams">Streams</NavLi>
                <NavLi href="/games">Games</NavLi>
                <NavLi href="/contact">Contact</NavLi>
            </NavUl>
    </NavContainer>
</Navbar>