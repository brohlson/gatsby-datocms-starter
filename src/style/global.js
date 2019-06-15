import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
@import url('https://rsms.me/inter/inter.css');

html { font-family: 'Inter', sans-serif; font-feature-settings: 'dlig', 'zero', 'ss01', 'cv05', 'cv10';}

@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Github Thing - Delete Me
.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
`;

export default Global;
