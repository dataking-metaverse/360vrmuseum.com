import {createGlobalStyle, css} from "styled-components";
import {media} from "styled-bootstrap-grid";

const createFlexInBreakpoint = breakpoint => css`
${media[breakpoint]`
  .flex-${breakpoint}-row { -ms-flex-direction: row !important; flex-direction: row !important; }
  .flex-${breakpoint}-column { -ms-flex-direction: column !important; flex-direction: column !important; }
  .flex-${breakpoint}-row-reverse { -ms-flex-direction: row-reverse !important; flex-direction: row-reverse !important; }
  .flex-${breakpoint}-column-reverse { -ms-flex-direction: column-reverse !important; flex-direction: column-reverse !important; }
  .flex-${breakpoint}-wrap { -ms-flex-wrap: wrap !important; flex-wrap: wrap !important; }
  .flex-${breakpoint}-nowrap { -ms-flex-wrap: nowrap !important; flex-wrap: nowrap !important; }
  .flex-${breakpoint}-wrap-reverse { -ms-flex-wrap: wrap-reverse !important; flex-wrap: wrap-reverse !important; }
  .flex-${breakpoint}-fill { -ms-flex: 1 1 auto !important; flex: 1 1 auto !important; }
  .flex-${breakpoint}-grow-0 { -ms-flex-positive: 0 !important; flex-grow: 0 !important; }
  .flex-${breakpoint}-grow-1 { -ms-flex-positive: 1 !important; flex-grow: 1 !important; }
  .flex-${breakpoint}-shrink-0 { -ms-flex-negative: 0 !important; flex-shrink: 0 !important; }
  .flex-${breakpoint}-shrink-1 { -ms-flex-negative: 1 !important; flex-shrink: 1 !important; }
  .justify-content-${breakpoint}-start { -ms-flex-pack: start !important; justify-content: flex-start !important; }
  .justify-content-${breakpoint}-end { -ms-flex-pack: end !important; justify-content: flex-end !important; }
  .justify-content-${breakpoint}-center { -ms-flex-pack: center !important; justify-content: center !important; }
  .justify-content-${breakpoint}-between { -ms-flex-pack: justify !important; justify-content: space-between !important; }
  .justify-content-${breakpoint}-around { -ms-flex-pack: distribute !important; justify-content: space-around !important; }
  .align-items-${breakpoint}-start { -ms-flex-align: start !important; align-items: flex-start !important; }
  .align-items-${breakpoint}-end { -ms-flex-align: end !important; align-items: flex-end !important; }
  .align-items-${breakpoint}-center { -ms-flex-align: center !important; align-items: center !important; }
  .align-items-${breakpoint}-baseline { -ms-flex-align: baseline !important; align-items: baseline !important; }
  .align-items-${breakpoint}-stretch { -ms-flex-align: stretch !important; align-items: stretch !important; }
  .align-content-${breakpoint}-start { -ms-flex-line-pack: start !important; align-content: flex-start !important; }
  .align-content-${breakpoint}-end { -ms-flex-line-pack: end !important; align-content: flex-end !important; }
  .align-content-${breakpoint}-center { -ms-flex-line-pack: center !important; align-content: center !important; }
  .align-content-${breakpoint}-between { -ms-flex-line-pack: justify !important; align-content: space-between !important; }
  .align-content-${breakpoint}-around { -ms-flex-line-pack: distribute !important; align-content: space-around !important; }
  .align-content-${breakpoint}-stretch { -ms-flex-line-pack: stretch !important; align-content: stretch !important; }
  .align-self-${breakpoint}-auto { -ms-flex-item-align: auto !important; align-self: auto !important; }
  .align-self-${breakpoint}-start { -ms-flex-item-align: start !important; align-self: flex-start !important; }
  .align-self-${breakpoint}-end { -ms-flex-item-align: end !important; align-self: flex-end !important; }
  .align-self-${breakpoint}-center { -ms-flex-item-align: center !important; align-self: center !important; }
  .align-self-${breakpoint}-baseline { -ms-flex-item-align: baseline !important; align-self: baseline !important; }
  .align-self-${breakpoint}-stretch { -ms-flex-item-align: stretch !important; align-self: stretch !important; }
`}
`;

const ThirdPartyOverridingStyle = createGlobalStyle`

// ========================================
//    BOOTSTRAP HELPERS
// ========================================
.w-25 { width: 25% !important; }
.w-50 { width: 50% !important; }
.w-75 { width: 75% !important; }
.w-100 { width: 100% !important; }
.w-auto { width: auto !important; }
.h-25 { height: 25% !important; }
.h-50 { height: 50% !important; }
.h-75 { height: 75% !important; }
.h-100 { height: 100% !important; }
.h-auto { height: auto !important; }
.mw-100 { max-width: 100% !important; }
.mh-100 { max-height: 100% !important; }
.m-0 { margin: 0 !important; }
.mt-0, .my-0 { margin-top: 0 !important; }
.mr-0, .mx-0 { margin-right: 0 !important; }
.mb-0, .my-0 { margin-bottom: 0 !important; }
.ml-0, .mx-0 { margin-left: 0 !important; }
.m-1 { margin: 0.25rem !important; }
.mt-1, .my-1 { margin-top: 0.25rem !important; }
.mr-1, .mx-1 { margin-right: 0.25rem !important; }
.mb-1, .my-1 { margin-bottom: 0.25rem !important; }
.ml-1, .mx-1 { margin-left: 0.25rem !important; }
.m-2 { margin: 0.5rem !important; }
.mt-2, .my-2 { margin-top: 0.5rem !important; }
.mr-2, .mx-2 { margin-right: 0.5rem !important; }
.mb-2, .my-2 { margin-bottom: 0.5rem !important; }
.ml-2, .mx-2 { margin-left: 0.5rem !important; }
.m-3 { margin: 1rem !important; }
.mt-3, .my-3 { margin-top: 1rem !important; }
.mr-3, .mx-3 { margin-right: 1rem !important; }
.mb-3, .my-3 { margin-bottom: 1rem !important; }
.ml-3, .mx-3 { margin-left: 1rem !important; }
.m-4 { margin: 1.5rem !important; }
.mt-4, .my-4 { margin-top: 1.5rem !important; }
.mr-4, .mx-4 { margin-right: 1.5rem !important; }
.mb-4, .my-4 { margin-bottom: 1.5rem !important; }
.ml-4, .mx-4 { margin-left: 1.5rem !important; }
.m-5 { margin: 3rem !important; }
.mt-5, .my-5 { margin-top: 3rem !important; }
.mr-5, .mx-5 { margin-right: 3rem !important; }
.mb-5, .my-5 { margin-bottom: 3rem !important; }
.ml-5, .mx-5 { margin-left: 3rem !important; }
.p-0 { padding: 0 !important; }
.pt-0, .py-0 { padding-top: 0 !important; }
.pr-0, .px-0 { padding-right: 0 !important; }
.pb-0, .py-0 { padding-bottom: 0 !important; }
.pl-0, .px-0 { padding-left: 0 !important; }
.p-1 { padding: 0.25rem !important; }
.pt-1, .py-1 { padding-top: 0.25rem !important; }
.pr-1, .px-1 { padding-right: 0.25rem !important; }
.pb-1, .py-1 { padding-bottom: 0.25rem !important; }
.pl-1, .px-1 { padding-left: 0.25rem !important; }
.p-2 { padding: 0.5rem !important; }
.pt-2, .py-2 { padding-top: 0.5rem !important; }
.pr-2, .px-2 { padding-right: 0.5rem !important; }
.pb-2, .py-2 { padding-bottom: 0.5rem !important; }
.pl-2, .px-2 { padding-left: 0.5rem !important; }
.p-3 { padding: 1rem !important; }
.pt-3, .py-3 { padding-top: 1rem !important; }
.pr-3, .px-3 { padding-right: 1rem !important; }
.pb-3, .py-3 { padding-bottom: 1rem !important; }
.pl-3, .px-3 { padding-left: 1rem !important; }
.p-4 { padding: 1.5rem !important; }
.pt-4, .py-4 { padding-top: 1.5rem !important; }
.pr-4, .px-4 { padding-right: 1.5rem !important; }
.pb-4, .py-4 { padding-bottom: 1.5rem !important; }
.pl-4, .px-4 { padding-left: 1.5rem !important; }
.p-5 { padding: 3rem !important; }
.pt-5, .py-5 { padding-top: 3rem !important; }
.pr-5, .px-5 { padding-right: 3rem !important; }
.pb-5, .py-5 { padding-bottom: 3rem !important; }
.pl-5, .px-5 { padding-left: 3rem !important; }
.m-auto { margin: auto !important; }
.mt-auto, .my-auto { margin-top: auto !important; }
.mr-auto, .mx-auto { margin-right: auto !important; }
.mb-auto, .my-auto { margin-bottom: auto !important; }
.ml-auto, .mx-auto { margin-left: auto !important; }


.flex-row { -ms-flex-direction: row !important; flex-direction: row !important; }
.flex-column { -ms-flex-direction: column !important; flex-direction: column !important; }
.flex-row-reverse { -ms-flex-direction: row-reverse !important; flex-direction: row-reverse !important; }
.flex-column-reverse { -ms-flex-direction: column-reverse !important; flex-direction: column-reverse !important; }
.flex-wrap { -ms-flex-wrap: wrap !important; flex-wrap: wrap !important; }
.flex-nowrap { -ms-flex-wrap: nowrap !important; flex-wrap: nowrap !important; }
.flex-wrap-reverse { -ms-flex-wrap: wrap-reverse !important; flex-wrap: wrap-reverse !important; }
.flex-fill { -ms-flex: 1 1 auto !important; flex: 1 1 auto !important; }
.flex-grow-0 { -ms-flex-positive: 0 !important; flex-grow: 0 !important; }
.flex-grow-1 { -ms-flex-positive: 1 !important; flex-grow: 1 !important; }
.flex-shrink-0 { -ms-flex-negative: 0 !important; flex-shrink: 0 !important; }
.flex-shrink-1 { -ms-flex-negative: 1 !important; flex-shrink: 1 !important; }
.justify-content-start { -ms-flex-pack: start !important; justify-content: flex-start !important; }
.justify-content-end { -ms-flex-pack: end !important; justify-content: flex-end !important; }
.justify-content-center { -ms-flex-pack: center !important; justify-content: center !important; }
.justify-content-between { -ms-flex-pack: justify !important; justify-content: space-between !important; }
.justify-content-around { -ms-flex-pack: distribute !important; justify-content: space-around !important; }
.align-items-start { -ms-flex-align: start !important; align-items: flex-start !important; }
.align-items-end { -ms-flex-align: end !important; align-items: flex-end !important; }
.align-items-center { -ms-flex-align: center !important; align-items: center !important; }
.align-items-baseline { -ms-flex-align: baseline !important; align-items: baseline !important; }
.align-items-stretch { -ms-flex-align: stretch !important; align-items: stretch !important; }
.align-content-start { -ms-flex-line-pack: start !important; align-content: flex-start !important; }
.align-content-end { -ms-flex-line-pack: end !important; align-content: flex-end !important; }
.align-content-center { -ms-flex-line-pack: center !important; align-content: center !important; }
.align-content-between { -ms-flex-line-pack: justify !important; align-content: space-between !important; }
.align-content-around { -ms-flex-line-pack: distribute !important; align-content: space-around !important; }
.align-content-stretch { -ms-flex-line-pack: stretch !important; align-content: stretch !important; }
.align-self-auto { -ms-flex-item-align: auto !important; align-self: auto !important; }
.align-self-start { -ms-flex-item-align: start !important; align-self: flex-start !important; }
.align-self-end { -ms-flex-item-align: end !important; align-self: flex-end !important; }
.align-self-center { -ms-flex-item-align: center !important; align-self: center !important; }
.align-self-baseline { -ms-flex-item-align: baseline !important; align-self: baseline !important; }
.align-self-stretch { -ms-flex-item-align: stretch !important; align-self: stretch !important; }

${createFlexInBreakpoint('sm')}
${createFlexInBreakpoint('md')}
${createFlexInBreakpoint('lg')}
${createFlexInBreakpoint('xl')}

.text-justify { text-align: justify !important; }
.text-nowrap { white-space: nowrap !important; }
.text-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.text-left { text-align: left !important; }
.text-right { text-align: right !important; }
.text-center { text-align: center !important; }


.grecaptcha-badge {
    visibility: hidden;
}

`;

export default ThirdPartyOverridingStyle;
