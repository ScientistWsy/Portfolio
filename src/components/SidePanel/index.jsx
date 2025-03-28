import styled from "styled-components";
import { theme } from "../../styles/Theme";

const themeMode = 'light';
const setTheme = themeMode == 'dark' ? theme.dark : theme.light;

const PanelSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

const ContainerProfile = styled.div`
    height: 50%;

    //Testes de sombra: 
    //box-shadow: 0px 0px 15px 10px rgb(255, 0, 0) !important;//${setTheme.panel.shadow};
    //filter: drop-shadow(0px 0px 15px rgb(255, 0, 0));
    //clip-path: circle(100% at 50% 0);

    clip-path: polygon(0 0, 100% 0%, 100% 100%, 50% 90%, 0 100%);
    background-color: gray;
`

// const Box = styled.div`
//     height: 100px;
//     filter: drop-shadow(0px 0px 5px rgb(255, 0, 0));
//     clip-path: polygon(0 0, 100% 0%, 100% 100%, 50% 90%, 0 100%);
// `

const Name = styled.h1`
    color: ${setTheme.text.primary};
    font-size: 2.5em;
    font-weight: normal;
    margin: 20px auto 0 auto;
`

const Professional = styled.h2`
    color: ${setTheme.primary};
    margin: 15px auto 0 auto;
    font-weight: 500;
    font-size: 1.2em;
`

const SocialMedia = styled.div`
    display: flex;
    gap: 20px;
    margin: 20px auto 0 auto;
`

const LinkedInIcon = styled.svg`
    transition: 500ms;

    &:hover {
        transition: 500ms;
        scale: 1.2;
        fill: ${setTheme.primary};
        cursor: pointer;
    }
`

const GitHubIcon = styled.svg`
    transition: 500ms;

    &:hover {
        transition: 500ms;
        scale: 1.2;
        fill: ${setTheme.primary};
        cursor: pointer;
    }
`

const LineDiv = styled.div`
    width: 330px;
    height: 1px;
    margin: auto auto 0px auto;
    background-color: rgba(0, 0, 0, 0.2);;
`

const ContactMe = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    font-size: 20px;
    margin: 0 auto;
    padding: 15px 10px;
    cursor: pointer;
    color: ${setTheme.text.primary};
    max-width: max-content;

    &:hover {
        color: ${setTheme.primary};

        svg {
            fill: ${setTheme.primary}
        }
    }
`

const ContactIcon = styled.svg`
    width: 30;
    height: 25;
    fill: ${setTheme.text.primary};    
`

const SidePanel = () => {
    return (
        <PanelSection>
            <ContainerProfile>1</ContainerProfile>
            <div>2</div>
            <Name>Wesley Silveira</Name>
            <Professional>Full Stack Developer</Professional>
            <SocialMedia>
                <LinkedInIcon width="27" height="27" viewBox="0 0 27 27">
                    <path d="M24.2319 0.219425H2.38281C2.1372 0.215902 1.89333 0.26238 1.66512 0.356205C1.43691 0.45003 1.22884 0.589364 1.05277 0.76625C0.876709 0.943135 0.736109 1.15411 0.639001 1.38712C0.541894 1.62013 0.490181 1.87061 0.486816 2.12427V24.9557C0.490181 25.2094 0.541894 25.4598 0.639001 25.6929C0.736109 25.9259 0.876709 26.1368 1.05277 26.3137C1.22884 26.4906 1.43691 26.6299 1.66512 26.7238C1.89333 26.8176 2.1372 26.8641 2.38281 26.8605H24.2319C24.4775 26.8641 24.7213 26.8176 24.9495 26.7238C25.1777 26.6299 25.3858 26.4906 25.5619 26.3137C25.7379 26.1368 25.8786 25.9259 25.9757 25.6929C26.0728 25.4598 26.1245 25.2094 26.1278 24.9557V2.12427C26.1245 1.87061 26.0728 1.62013 25.9757 1.38712C25.8786 1.15411 25.7379 0.943135 25.5619 0.76625C25.3858 0.589364 25.1777 0.45003 24.9495 0.356205C24.7213 0.26238 24.4775 0.215902 24.2319 0.219425ZM8.26425 22.518H4.39488V10.5295H8.26425V22.518ZM6.32957 8.85115C5.79593 8.85115 5.28415 8.63222 4.90682 8.24251C4.52948 7.85281 4.31749 7.32426 4.31749 6.77314C4.31749 6.22202 4.52948 5.69347 4.90682 5.30377C5.28415 4.91407 5.79593 4.69513 6.32957 4.69513C6.61293 4.66194 6.89988 4.69094 7.17164 4.78023C7.44339 4.86952 7.69383 5.01708 7.90654 5.21325C8.11925 5.40943 8.28943 5.64979 8.40596 5.9186C8.52249 6.18742 8.58272 6.47862 8.58272 6.77314C8.58272 7.06766 8.52249 7.35887 8.40596 7.62768C8.28943 7.89649 8.11925 8.13686 7.90654 8.33303C7.69383 8.52921 7.44339 8.67677 7.17164 8.76605C6.89988 8.85534 6.61293 8.88434 6.32957 8.85115ZM22.2198 22.518H18.3504V16.0842C18.3504 14.4724 17.7958 13.4201 16.3899 13.4201C15.9548 13.4234 15.5312 13.5643 15.176 13.8239C14.8209 14.0836 14.5513 14.4493 14.4037 14.872C14.3027 15.1851 14.259 15.5149 14.2747 15.8444V22.5047H10.4053C10.4053 22.5047 10.4053 11.6085 10.4053 10.5162H14.2747V12.2079C14.6262 11.578 15.1374 11.0591 15.7533 10.707C16.3693 10.3549 17.0665 10.183 17.77 10.2098C20.3496 10.2098 22.2198 11.9282 22.2198 15.618V22.518Z" />
                </LinkedInIcon>
                <GitHubIcon width="27" height="27" viewBox="0 0 25 24">
                    <path d="M12.5898 0.560794C9.44632 0.528851 6.41875 1.74631 4.17249 3.9456C1.92623 6.1449 0.645074 9.14607 0.610596 12.2895C0.622708 14.7738 1.42185 17.1903 2.89325 19.1919C4.36464 21.1936 6.43258 22.6774 8.80002 23.4302C9.39899 23.5391 9.61679 23.1797 9.61679 22.8639C9.61679 22.5481 9.61679 21.8511 9.61679 20.871C6.28439 21.5789 5.57653 19.3028 5.57653 19.3028C5.35469 18.5883 4.88307 17.9775 4.24792 17.5822C3.1589 16.8634 4.33504 16.8743 4.33504 16.8743C4.71146 16.9246 5.07161 17.0595 5.38846 17.2689C5.70532 17.4782 5.97066 17.7566 6.1646 18.0831C6.50255 18.6691 7.05709 19.0991 7.70884 19.2803C8.36059 19.4616 9.05746 19.3797 9.64946 19.0523C9.71034 18.456 9.9804 17.9004 10.4118 17.4842C7.75457 17.1901 4.96667 16.1882 4.96667 11.6906C4.94291 10.5174 5.37641 9.38089 6.17549 8.52153C5.81157 7.51426 5.85454 6.40481 6.29528 5.42871C6.29528 5.42871 7.30807 5.1129 9.56234 6.62663C11.5246 6.10373 13.5896 6.10373 15.5519 6.62663C17.8389 5.1129 18.819 5.42871 18.819 5.42871C19.2597 6.40481 19.3027 7.51426 18.9388 8.52153C19.7564 9.36514 20.2134 10.494 20.213 11.6688C20.213 16.1773 17.4033 17.1683 14.7679 17.4624C15.0564 17.7426 15.2793 18.0832 15.4206 18.4598C15.5618 18.8364 15.6178 19.2396 15.5846 19.6404V22.853C15.5846 22.853 15.8024 23.5391 16.4014 23.4193C18.7621 22.6618 20.8231 21.1776 22.2899 19.1788C23.7568 17.18 24.5544 14.7688 24.569 12.2895C24.5346 9.14607 23.2534 6.1449 21.0071 3.9456C18.7609 1.74631 15.7333 0.528851 12.5898 0.560794Z" />
                </GitHubIcon>
            </SocialMedia>
            <LineDiv />
            <ContactMe>
                Contact Me
                <ContactIcon width="30" height="25" viewBox="0 0 30 27">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6154 0.649414L19.6287 26.594L13.3862 20.1097L14.6336 23.9999L11.7205 26.6014V20.2701L25.997 5.00024L9.95618 17.2974L0.897461 14.9197L29.6154 0.649414Z" />
                </ContactIcon>
            </ContactMe>
        </PanelSection>
    );
}

export default SidePanel;