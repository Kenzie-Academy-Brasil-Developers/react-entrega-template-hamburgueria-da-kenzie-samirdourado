import { createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`

    

    :root{
        --font-family-1: font-family: 'Inter', sans-serif;
        --color-primary: #27AE60;
        --color-primary-50:#93D7AF;
        --color-secondary:#EB5757;

        --grey-100: #333333;
        --grey-50:  #828282;
        --grey-20: #E0E0E0;
        --grey-0:  #F5F5F5;
        --white: #FFFFFF;

        --negative:#E60000;
        --warning: #FFCD07;
        --success:  #168821;
        --information: #155BCB;

        /*Fonts Size*/
        --heading1: 1.625rem; /*26px bold*/
        --heading2: 1.375rem; /*22px bold*/
        --heading3: 1.125rem; /*18px bold*/
        --heading4: 0.875rem; /*14px bold*/
        --headline: 1rem; /*16px regular*/
        --body: 0.875rem; /*14px regular*/
        --caption: 0.75rem; /*12px regular*/
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    @keyframes modalAnimation {
        0%{
            opacity: 0;
            transform: translateX(-70%);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }    
    }
`

