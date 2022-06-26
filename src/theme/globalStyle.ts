import { createGlobalStyle } from "styled-components";
import { device } from "@utils/responsive";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;

        @media ${device.mobileS} {
            font-size: 12px;
        }

        @media ${device.tablet} {
            font-size: 13px;
        }

        @media ${device.laptop} {
            font-size: 14px;
        }

        @media ${device.desktop} {
            padding: 16px;
        }

        @media ${device.desktopXL} {
            padding: 20px;
        }
    }

    body {
        font-family: "Inter";
        background-color: #e5e5e5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }   
    
    .float-right {
        float: right !important;
    }  
    
    .float-left {
        float: left !important;
    }
    
    .text-right {
        text-align: right !important;
    }  
    
    .text-left {
        text-align: left !important;
    }

    .m-0 {
        margin: 0 !important;
    }

    .mt-0 {
        margin-top: 0 !important;
    }

    .mr-0 {
        margin-right: 0 !important;
    }

    .mb-0 {
        margin-bottom: 0 !important;
    }

    .mb-8 {
        margin-bottom: 0.5rem !important;
    }

    .mb-12 {
        margin-bottom: 0.75rem !important;
    }

    .ml-0 {
        margin-left: 0 !important;
    } 

    .p-0 {
        padding: 0 !important;
    }

    .pt-0 {
        padding-top: 0 !important;
    }

    .pr-0 {
        padding-right: 0 !important;
    }

    .pb-0 {
        padding-bottom: 0 !important;
    }

    .pl-0 {
        padding-left: 0 !important;
    }
`;

export default GlobalStyle;
