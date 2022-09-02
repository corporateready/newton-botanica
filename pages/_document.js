import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();

    return { html, head, errorHtml, chunks };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://cloud.roistat.com/api/site/1.0/e39442a8581e616d741b8f0786da960e/approve?v=294&amp;visit=578295&amp;hash=OS%60%40c%40ECr%18N%40Hl%13BN~%1ARf%40o_g~sPdn%7BRg~o%1Bgi%1ERd%40%7F%1EdP%7F%5De~A%5DeSh%40H%18%13XK%7D%7CYsrNZHGp%5Cf%7DdEp%7DdXsG%13%1Ef%7D%1FFs%18%7CPI%18lSO~%1B%1Fprg%1Dcl%13GsDk%13pGc_gy%1ERd%40%7F%1EdP%7F%5De~A%5Dgn%7B%1Ef%40c%1FgP%7FSgnc%5DgPYMr%18NBz%7FNhgy%1ESf%40IRe~%7B%5Den%7B%1FgS%1ERd%40%7F%1EdP%7F%5De~A%5DeShSH%18FPNml%1Ar%18pZIDd%1Ar%19pZI%18F%1Az~%7B%1Eg%40o%1AgPYMr%1B%13Lpmg%13sG%7CCd%18gRe~I%5Ee~MPgi%1A%1Ap%40hAf%7D%60Bd%40k%5Ed%40g%1FsPk%18enc%1AsG%7FPeSh%40H%18%13XK%7D%7CYsrNZHGp%5Cf%7DdEp%7DdXsG%13%1Ef%7Dp%1BHGd%1AK%7D%13_s%7D%5D%13O%7D%7CPeSh%40H%18%13XK%7D%7CYsrNZHGp%5Cf%7DdEp%7DdXsG%13%1EfrhFIGp%5CIG%1BBHGdFzrFFIPYMs%18%13%5CK%18FFHml%19K%7D%1FGHS%1B%40Km%7C%40K%18%60%5COi%1BBHGlYOrxZs%19g%13O%7D%7CPeSh%40H%18%13XK%7D%7CYsrNZHGp%5Cf%7DdEp%7DdXsG%13%1Ef%7DlANG%7CSNmFPp%7D%1BFHD%7B%13O%7D%7CPeSh%40H%18%13XK%7D%7CYsrNZHGp%5Cf%7DdEp%7DdXsG%13%1Ef%7D%13%1AKm%7CSIP%1B%1Fprg%1Dcod%5CH%18%5EZp%7FRBN%1AF_pG%13nH%18%1FPp%7D%1F%1Az%7D%7C%1FyD%7CK%7C%1A%1FYsPdeKmd_K%18FzHF%60%1FplN%7CI%1AF%5E%7D%40lCH%7F%1E%5Ds%7CI%1FN%7CFrN%18FzHF%60%1FplN%7CI%1AF_%7BGR%40H%7CZ%18s%18%1ARKm%60%5E~GR%60KDk%5Ds%18%1F%7DHoRnyGBCH%7FpPp%7CByIlAP~%7DFzHF%60%1FplN%7CI%1AF%5ExG%5EAH%7Cp%1FpoNYOFZrg%7DRCHFlZ~%18%1FyO%7Dxr%7Crd%60H~A%5Ds%7FN%7DO%7Dd%1Fy~pAyoER%7DFM%5DeSh%18K%7D%7C%19p%7DxLs%18%13%5CK%18FFr%19h%5CHmF%40O~%1B%1Fprg%1Dcl%13%1FH%7C%13%1BK%7D%7B%13g~s%1BenMSgnM%19d%40gRe~k%18g~%7BPgPYMr%19F%5Er%18%7B%13g~s%1BenMSgnM%19d%40YMIG%13ZI%19xBNl%13%18KrdZNn%1A%1BdPMSe~%7F%1Dcb%60%5CKrd%1AsrxLKrdLHG%7CFpl%13YKrd%1Ap%7D%1FLIG%7CRN%7D%7CPNbg%13gnYMIG%13ZI%19xBNl%13ZI%1B%13PsrpFr%18xBNmlLK%7D%1FLs%18%13%5CK%18FFz~o%1Dcb%60%5CKrd%1AsrxLH%7DlSK%18%7CSzrdZNm%7CLHG%7C%19Nm%13_fG%1BArS%7FSx%40YMIG%13ZI%19xBNl%13%5Esr%60Xpr%60LH%18RAzrdZNm%7CLHG%7C%19Nm%13_fG%1BArS%7FSx%40YMIG%13ZI%19xBNl%13%40s%7DRYr%19xSs%7DdXK%7D%1FDz~o%1Dcb%60%5CKrd%1AsrxLImB%5CHG%7CLIG%7C%5DHml%40p%7D%1BFHD%7B%13HD%7CYHnYMIG%13ZI%19xBNl%13FH%7DlZHbxSs%7DdXK%7D%1FDr%18%7C%5Es%7DFYz%7D%1F%1BHm%5D%1Dcb%60%5CKrd%1AsrxLp%7D%1BBK%7DR%1AIGl%40K%18F_p%1B%13%1AIGl%40K%18F_p%1B%13FH%7DlZHn%1B_N%7DRYeShSH%18FPNml%1Ar%18%7C%5Es%7DFYNb%60Bs%18%5EZHGNLp%7D%1BBK%7DRPz%7D%1F%1BHm%5D%1Dcb%60%5CKrd%1AsrxLs%18%13%5CK%18FFI%1B%13%1AH%1B%13SprdBNG%7F%13IG%13ZI%19xBNl%13BsC%7FS%7B%19%60%5CKrd%1AsrxLs%7D%60LI%19%7CCH%7DF%1A%60~%60nIG%13ZI%19xBNl%13%18KrdZNi%7FS%7B%19%60%5CKrd%1AsrxLH%7DlSK%18%7CS%60~%60nIG%13ZI%19xBNl%13%5Esr%60Xpr%60LH%18RA%60~%60nIG%13ZI%19xBNl%13%5DKm%13_py%7FS%7B%19%60%5CKrd%1AsrxLs%18lYHl%13%1AIGl%40K%18F_pS%7FS%7B%19%60%5CKrd%1AsrxLImB%5CHG%7CLIG%7C%5DHml%40p%7D%1BFHD%7BFgAdSH%18FPNml%1Ar%19hEH%18%1FFr%19d%40IGF%5DNl%13AsrxB%60~%60nIG%13ZI%19xBNl%13FH%7DlZHbxSs%7DdXK%7D%1FDr%18%7C%5Es%7DFY%60~%60nIG%13ZI%19xBNl%13FH%7DlZHbxSs%7DdXK%7D%1FDr%19xSs%7DdXK%7D%1FDr%18%7C%5Es%7DFY%60~%60nIG%13ZI%19xBNl%13FH%7DlZHbxSs%7DdXK%7D%1FDr%18%7C%5Es%7DFYIPYMr%18NZpn%1Bb%7B~o_gC%1ERdPISg~I%19g~%7BSf%40o%18d%40cRgnk%1Ae~s%1Dcl%13DsrxLp%19xBp%1B%13%7C%7B%7C%12Sgng%5Ddnk%5De~%7CLg~%1AReShSH%18FPNml%1Ar%19hEH%18%1FFzy%7FS%7BC%7FSgng%19gS%7FSgnI%18gi%7FSgno%1Bdi%7FSgns%5D%60~%60n%60~%60igPIP%60~c%5DdPsFg%40k%5Dg~%7FFg%40k%5DdPg%1Dcb%60%5CKrd%1AsrxLImB%5CHG%7CLI%18dSKrh%1Ar%18xBNmo%13%60~%7Ci%60~Ni%60~cSImB%5CHG%7FFg%40cFg%1AoFg%40cFgAcFg%40kPdPgFg%40k%19d%40kFg%40kRd~%7BFg%40k%18gi%7FSgC%7FS%7BS%7FSgGdPI%1B%13Pp%7DRFs%19x%5CIDgFg%40cFg%1AoFd%7FcFd%7F%7BFgAgFg%40%60SprhYs%7DdFs%7D%60Yp%7C%13_N%7D%1BCpr%60P%60~cS%60~dh%60~%7Ci%60~cSgnI%18gno%1Bg%40c%5D%60~cS%60~%7Co%60~No%60~%60n%60~Ni%60~cSImB%5CHG%7FFg%40cFg%1AoFg%40cFgAcPdPgFg%40k%19dC%7FSgnkRdy%7FSgnk%19gS%7FSgC%7FS%7BS%7FSgGdPI%1B%13Pp%7DRFs%19x%5CIDgFg%40cFg%1AoFd%7FcFd%7F%7BFgAgFg%40%60SprhYs%7DdFs%7D%60Yp%7C%13_N%7D%1BCpr%60P%60~cS%60~dh%60~%7Ci%60~cSgPIPdPA%5DgPk%1EengFg%40cFd%7F%7BFd%1A%7BFd%7F%7BCL%7B%17%17&amp;mv=456:0|1:8|566:0|1401:15|33:244|0:108|0:54|0:1|1:2|68:2|244:20&amp;pl=MacIntel&amp;ym=0" type="text/javascript" async=""></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-203040095-1"
          ></script>
          {/* <script src="public/helper/dataLayer.js"></script> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KRLSSZN"
              height="0"
              width="0"
              styles="display:none;visibility:hidden"
            ></iframe>
          </noscript>
          {/* <script src='../public/helper/trecker.js'></script> */}
          <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
