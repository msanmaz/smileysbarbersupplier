
import React, { useCallback, useState } from 'react';
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import Dropdown from './Dropdown'
import { useRouter } from 'next/router'
import SearchBar from './SearchBar';


export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    const router = useRouter()



    return (
        <div className="fixed z-50 w-full">
            <div className={` w-full px-6 flex items-center lg:py-0 py-2 bg-black`}>
                <div className="flex my-4">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" className="w-20 h-10 animate md:flex" version="1.2" viewBox="0 0 375 375">
                            <defs />
                            <defs>
                                <symbol id="a" overflow="visible">
                                    <path d="M6.188.313A5.979 5.979 0 013.405-.36a3.578 3.578 0 01-.984-.688c-.2.324-.445.61-.735.86-.261.18-.402.273-.421.296H.734v-4h.844c.207.688.5 1.309.875 1.86C3.305-.812 4.414-.203 5.781-.203c.79 0 1.426-.238 1.907-.719.476-.476.718-1.113.718-1.906 0-.469-.14-.883-.422-1.25a4.162 4.162 0 00-1.015-.953 30.287 30.287 0 00-1.703-1.063c-.918-.508-1.668-.972-2.25-1.39a5.925 5.925 0 01-1.47-1.594c-.405-.633-.609-1.39-.609-2.266 0-.687.192-1.304.579-1.86.382-.55.96-.987 1.734-1.312.77-.332 1.719-.5 2.844-.5.812 0 1.625.23 2.437.688.301.18.61.402.922.672.238-.364.485-.649.735-.86l.421-.296h.516v4h-.828a6.285 6.285 0 00-.828-1.829 4.46 4.46 0 00-1.25-1.312 2.898 2.898 0 00-1.703-.531c-.555 0-1.028.218-1.422.656-.387.43-.578.976-.578 1.64 0 .524.148.993.453 1.407.3.418.672.781 1.11 1.094.437.304 1.034.667 1.796 1.093.883.512 1.598.965 2.14 1.36.551.386 1.016.87 1.391 1.453.375.586.563 1.25.563 2a3.54 3.54 0 01-.656 2.078c-.43.617-1.079 1.105-1.954 1.469-.867.363-1.921.546-3.171.546zm0 0" />
                                </symbol>
                                <symbol id="b" overflow="visible">
                                    <path d="M2.938-12.078v11.14l1.687.625V0h-4v-.313l1.688-.625v-13.124l-1.266-.329v-.312h2.625c.726 0 1.305.152 1.734.453.426.305.797.746 1.11 1.328l4.578 8.766 3.5-8.766c.238-.613.562-1.062.969-1.344.406-.289 1.03-.437 1.874-.437h2.204v.312l-1.266.329V-.626l1.266.313V0h-5.985v-.313l1.25-.312v-11.453L9.97.203h-.625zm0 0" />
                                </symbol>
                                <symbol id="c" overflow="visible">
                                    <path d="M1.047 0v-.313l1.266-.312v-13.438l-1.266-.328v-.312H7.03v.312l-1.25.329V-.626l1.25.313V0zm0 0" />
                                </symbol>
                                <symbol id="d" overflow="visible">
                                    <path d="M1.047-.313l1.266-.312v-13.438l-1.266-.328v-.312H7.03v.312l-1.25.329v13.53h4.516c0-.874.223-1.69.672-2.452a2.73 2.73 0 01.687-.797h.625V0H1.047zm0 0" />
                                </symbol>
                                <symbol id="e" overflow="visible">
                                    <path d="M1.047-.313l1.266-.312v-13.438l-1.266-.328v-.312H12.28v3.781h-.625a2.632 2.632 0 01-.687-.797 4.732 4.732 0 01-.672-2.453H5.78v6.61h2.407a4.81 4.81 0 01.546-1.485c.114-.207.25-.41.407-.61h.625v4.72H9.14a4.033 4.033 0 01-.407-.61 4.774 4.774 0 01-.546-1.484H5.78v6.5h4.922c0-.875.223-1.692.672-2.453.195-.32.43-.586.703-.797h.625V0H1.047zm0 0" />
                                </symbol>
                                <symbol id="f" overflow="visible">
                                    <path d="M4.094-.313l1.265-.312v-4.828l-4.312-8.61L0-14.39v-.312h2.625c.727 0 1.313.156 1.75.469.445.304.805.742 1.078 1.312l3.11 6.203 3.203-7.031-1.579-.64v-.313h3.985v.312l-1.672.641-3.688 8.078v5.047l1.266.313V0H4.094zm0 0" />
                                </symbol>
                                <symbol id="h" overflow="visible">
                                    <path d="M7.906-7.25c0-.79-.375-1.379-1.125-1.766-.492-.238-1.078-.359-1.765-.359H.625v.406h1.25v8.563H.625V0h4.438C6.405 0 7.39-.426 8.015-1.281A2.47 2.47 0 008.5-2.75c0-.832-.371-1.477-1.11-1.938a3.883 3.883 0 00-1.187-.421c.75-.282 1.266-.754 1.547-1.422.102-.25.156-.489.156-.719zM4.641-8.969c1.07 0 1.68.477 1.828 1.422.02.137.031.277.031.422 0 .68-.266 1.188-.797 1.531-.312.2-.68.297-1.094.297H3.22v-3.672zm.265 4.094c.946 0 1.582.402 1.907 1.203.125.293.187.61.187.953 0 .805-.262 1.43-.781 1.875a1.843 1.843 0 01-1.235.438H3.22v-4.469zm0 0" />
                                </symbol>
                                <symbol id="i" overflow="visible">
                                    <path d="M9.578 0c0-.227-.086-.36-.25-.39-.055-.008-.105-.016-.156-.016H8.64L5.062-9.375h-.578L.984-.406H0V0h2.781c0-.227-.086-.36-.25-.39-.054-.008-.105-.016-.156-.016h-.766l1.172-3.031h3.266l1.172 3.03H6.203V0zM5.875-3.89H2.953l1.453-3.782zm0 0" />
                                </symbol>
                                <symbol id="j" overflow="visible">
                                    <path d="M4.453 0v-.406H3.22v-3.89h1.484L7.203 0h2.36c0-.227-.063-.36-.188-.39a1.296 1.296 0 00-.188-.016h-.593L6.078-4.438c.988-.238 1.664-.753 2.031-1.546.133-.313.204-.63.204-.954 0-.78-.34-1.406-1.016-1.875-.555-.374-1.234-.562-2.047-.562H.625v.406h1.25v8.563H.625V0zm.328-8.969c.895 0 1.516.367 1.86 1.094.132.305.203.621.203.953 0 .75-.262 1.336-.782 1.75a1.93 1.93 0 01-1.234.422h-1.61v-4.219zm0 0" />
                                </symbol>
                                <symbol id="k" overflow="visible">
                                    <path d="M7.906-6.563l-.078-2.812H.625v.406h1.25v8.563H.625V0h7.203l.078-2.813h-.312l-.219.735c-.262.887-.648 1.418-1.156 1.594a1.507 1.507 0 01-.5.078h-2.5V-4.61h3.219v-.454h-3.22v-3.906h2.5c.75 0 1.286.508 1.61 1.516.02.062.035.117.047.156l.219.734zm0 0" />
                                </symbol>
                                <symbol id="l" overflow="visible">
                                    <path d="M7.594-2.453c0-.926-.5-1.672-1.5-2.235-.2-.101-.809-.378-1.828-.828-.93-.394-1.512-.8-1.75-1.218a1.5 1.5 0 01-.188-.735c0-.695.336-1.18 1.016-1.453a2.64 2.64 0 01.969-.172c.875 0 1.539.297 2 .89.3.407.445.903.437 1.485h.469v-2.734c-.25 0-.399.078-.438.234a1.028 1.028 0 00-.031.297c-.742-.406-1.574-.61-2.5-.61-1.125 0-2 .313-2.625.938-.418.438-.625.95-.625 1.531 0 .875.488 1.59 1.469 2.141.176.094.77.36 1.781.797.938.418 1.531.84 1.781 1.266.133.242.203.5.203.78 0 .731-.355 1.259-1.062 1.579a2.704 2.704 0 01-1.11.219c-1.593-.02-2.48-.992-2.656-2.922H.938V.03c.25 0 .394-.07.437-.218.02-.083.031-.235.031-.454.801.532 1.711.797 2.735.797 1.195 0 2.125-.32 2.78-.969a2.272 2.272 0 00.673-1.64zm0 0" />
                                </symbol>
                                <symbol id="m" overflow="visible">
                                    <path d="M.156-8.969h1.25v5.453c.02 2.438 1.235 3.66 3.64 3.672 1.833 0 2.942-.75 3.329-2.25.113-.457.172-.976.172-1.562V-8.97h1.25v-.406H6.75v.406H8v5.406c0 2.024-.75 3.11-2.25 3.266-.125.012-.25.016-.375.016-1.273 0-2.074-.535-2.406-1.61-.149-.468-.219-1.039-.219-1.718v-5.36h1.234v-.406H.156zm0 0" />
                                </symbol>
                                <symbol id="n" overflow="visible">
                                    <path d="M4.922-8.969c.926 0 1.523.418 1.797 1.25.082.274.125.563.125.875 0 1.356-.606 2.102-1.813 2.235-.125.011-.25.015-.375.015H3.22v-4.375zM4.782 0c0-.227-.087-.36-.25-.39-.055-.008-.106-.016-.157-.016H3.219v-3.735h1.375c1.707 0 2.836-.484 3.39-1.453.22-.363.329-.785.329-1.265 0-1.032-.45-1.754-1.344-2.172-.48-.227-1.055-.344-1.719-.344H.625v.406h1.25v8.563H.625V0zm0 0" />
                                </symbol>
                                <symbol id="o" overflow="visible">
                                    <path d="M7.469 0l.078-3.125h-.313L6.97-2.078c-.25.96-.668 1.508-1.25 1.64a1.945 1.945 0 01-.36.032H3.22V-8.97H4.53v-.406H.625v.406h1.25v8.563H.625V0zm0 0" />
                                </symbol>
                                <symbol id="p" overflow="visible">
                                    <path d="M4.453 0c0-.227-.086-.36-.25-.39-.055-.008-.105-.016-.156-.016h-.828V-8.97h1.234v-.406H.625v.406h1.25v8.563H.625V0zm0 0" />
                                </symbol>
                                <clipPath id="g">
                                    <path d="M113 122.332h149v37.5H113zm0 0" />
                                </clipPath>
                            </defs>
                            <path fill="#fff" d="M84.379 100.438v174.468H291.19V100.437zm200.223 167.886H90.828V106.883h193.774zm0 0" />
                            <use x="132.95" y="196.001" fill="#fff" href="#a" />
                            <use x="150.947" y="196.001" fill="#fff" href="#b" />
                            <use x="177.134" y="196.001" fill="#fff" href="#c" />
                            <use x="190.721" y="196.001" fill="#fff" href="#d" />
                            <use x="209.033" y="196.001" fill="#fff" href="#e" />
                            <use x="228.08" y="196.001" fill="#fff" href="#f" />
                            <g clipPath="url(#g)">
                                <path fill="#fff" d="M257.563 137.559c-3.29 14.601-26.11 8.765-32.434 3.492-9.14-7.64-7.324-16.535-21.54-18.5-8.515-1.184-13.741 3.308-16.089 9.047-2.348-5.707-7.605-10.2-16.09-9.047-14.215 1.965-12.367 10.86-21.539 18.5-6.324 5.304-29.176 11.11-32.434-3.492-1.124-5.024-5.007-3.621-4.066-.875 7.887 23.46 42.293 24.367 54.125 22.59 8.953-1.376 16.844-7.583 20.004-14.258 3.16 6.644 11.05 12.882 20.004 14.257 11.863 1.809 46.238.903 54.125-22.59.91-2.745-2.942-4.148-4.067.876zm0 0" />
                            </g>
                            <use x="142.844" y="227.364" fill="#fff" href="#h" />
                            <use x="158.749" y="227.364" fill="#fff" href="#i" />
                            <use x="175.029" y="227.364" fill="#fff" href="#j" />
                            <use x="191.293" y="227.364" fill="#fff" href="#h" />
                            <use x="207.198" y="227.364" fill="#fff" href="#k" />
                            <use x="222.587" y="227.364" fill="#fff" href="#j" />
                            <use x="130.621" y="246.864" fill="#fff" href="#l" />
                            <use x="145.698" y="246.864" fill="#fff" href="#m" />
                            <use x="162.275" y="246.864" fill="#fff" href="#n" />
                            <use x="177.758" y="246.864" fill="#fff" href="#n" />
                            <use x="193.241" y="246.864" fill="#fff" href="#o" />
                            <use x="207.646" y="246.864" fill="#fff" href="#p" />
                            <use x="219.427" y="246.864" fill="#fff" href="#k" />
                            <use x="234.817" y="246.864" fill="#fff" href="#j" />
                        </svg>
                    </Link>
                </div>

                <div className="justify-center pt-2 relative mx-auto text-gray-600 md:flex">
                    <SearchBar/>
                </div>



                <div className="md:flex hidden items-center px-2">                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-4 h-4 sm:w-8 sm:h-8" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512.076 512.076" style={{ enableBackground: "new 0 0 512 512" }} ><g>
                    <g xmlns="http://www.w3.org/2000/svg" transform="translate(-1 -1)">
                        <g>
                            <g>
                                <path d="M499.639,396.039l-103.646-69.12c-13.153-8.701-30.784-5.838-40.508,6.579l-30.191,38.818     c-3.88,5.116-10.933,6.6-16.546,3.482l-5.743-3.166c-19.038-10.377-42.726-23.296-90.453-71.04s-60.672-71.45-71.049-90.453     l-3.149-5.743c-3.161-5.612-1.705-12.695,3.413-16.606l38.792-30.182c12.412-9.725,15.279-27.351,6.588-40.508l-69.12-103.646     C109.12,1.056,91.25-2.966,77.461,5.323L34.12,31.358C20.502,39.364,10.511,52.33,6.242,67.539     c-15.607,56.866-3.866,155.008,140.706,299.597c115.004,114.995,200.619,145.92,259.465,145.92     c13.543,0.058,27.033-1.704,40.107-5.239c15.212-4.264,28.18-14.256,36.181-27.878l26.061-43.315     C517.063,422.832,513.043,404.951,499.639,396.039z M494.058,427.868l-26.001,43.341c-5.745,9.832-15.072,17.061-26.027,20.173     c-52.497,14.413-144.213,2.475-283.008-136.32S8.29,124.559,22.703,72.054c3.116-10.968,10.354-20.307,20.198-26.061     l43.341-26.001c5.983-3.6,13.739-1.855,17.604,3.959l37.547,56.371l31.514,47.266c3.774,5.707,2.534,13.356-2.85,17.579     l-38.801,30.182c-11.808,9.029-15.18,25.366-7.91,38.332l3.081,5.598c10.906,20.002,24.465,44.885,73.967,94.379     c49.502,49.493,74.377,63.053,94.37,73.958l5.606,3.089c12.965,7.269,29.303,3.898,38.332-7.91l30.182-38.801     c4.224-5.381,11.87-6.62,17.579-2.85l103.637,69.12C495.918,414.126,497.663,421.886,494.058,427.868z" fill="#ffffff" data-original="#000000" />
                                <path d="M291.161,86.39c80.081,0.089,144.977,64.986,145.067,145.067c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533     c-0.099-89.503-72.63-162.035-162.133-162.133c-4.713,0-8.533,3.82-8.533,8.533S286.448,86.39,291.161,86.39z" fill="#ffffff" data-original="#000000" />
                                <path d="M291.161,137.59c51.816,0.061,93.806,42.051,93.867,93.867c0,4.713,3.821,8.533,8.533,8.533     c4.713,0,8.533-3.82,8.533-8.533c-0.071-61.238-49.696-110.863-110.933-110.933c-4.713,0-8.533,3.82-8.533,8.533     S286.448,137.59,291.161,137.59z" fill="#ffffff" data-original="#000000" />
                                <path d="M291.161,188.79c23.552,0.028,42.638,19.114,42.667,42.667c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533     c-0.038-32.974-26.759-59.696-59.733-59.733c-4.713,0-8.533,3.82-8.533,8.533S286.448,188.79,291.161,188.79z" fill="#ffffff" data-original="#000000" />
                            </g>
                        </g>
                    </g>
                </g>
                </svg></div>
                <div className="md:flex hidden items-center px-2">
                    <a href="https://api.whatsapp.com/send?phone=905383009717" target="_blank">
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" className="fill-current text-white" viewBox="0 0 100 100" width="50px" height="50px"><path d="M 50 15 C 30.68158 15 15 30.68158 15 50 C 15 56.13094 16.607004 61.884452 19.378906 66.896484 L 15.072266 82.464844 C 14.671771 83.913976 16.085438 85.328373 17.535156 84.925781 L 33.105469 80.619141 C 38.11809 83.391483 43.869654 85 50 85 C 69.31842 85 85 69.31842 85 50 C 85 30.68158 69.31842 15 50 15 z M 50 17 C 68.23758 17 83 31.76242 83 50 C 83 68.23758 68.23758 83 50 83 C 44.064811 83 38.507278 81.426921 33.695312 78.685547 A 1.0001 1.0001 0 0 0 32.933594 78.591797 L 17 82.998047 L 21.408203 67.066406 A 1.0001 1.0001 0 0 0 21.3125 66.304688 C 18.572114 61.493724 17 55.935189 17 50 C 17 31.76242 31.76242 17 50 17 z M 50 22 C 34.541787 22 22 34.541787 22 50 C 22 55.881567 23.836204 61.330109 26.935547 65.835938 L 24.408203 74.976562 A 0.50005 0.50005 0 0 0 25.023438 75.591797 L 34.164062 73.064453 C 38.670353 76.164715 44.118498 78 50 78 C 65.458213 78 78 65.458213 78 50 C 78 42.300345 74.888757 35.321559 69.855469 30.259766 A 0.50064154 0.50064154 0 0 0 69.144531 30.964844 C 73.999243 35.84705 77 42.569655 77 50 C 77 64.917787 64.917787 77 50 77 C 44.23771 77 38.905865 75.191654 34.521484 72.117188 A 0.50005 0.50005 0 0 0 34.101562 72.044922 L 25.607422 74.394531 L 27.957031 65.900391 A 0.50005 0.50005 0 0 0 27.884766 65.480469 C 24.810274 61.096051 23 55.763251 23 50 C 23 35.082213 35.082213 23 50 23 C 52.55371 23 55.020926 23.36246 57.363281 24.025391 A 0.50048162 0.50048162 0 1 0 57.636719 23.0625 C 55.209074 22.375431 52.64829 22 50 22 z M 60.496094 24.078125 A 0.50005 0.50005 0 0 0 60.308594 25.041016 C 61.322994 25.460903 62.30459 25.942928 63.253906 26.478516 A 0.50005 0.50005 0 1 0 63.746094 25.609375 C 62.76341 25.054963 61.745006 24.5533 60.691406 24.117188 A 0.50005 0.50005 0 0 0 60.496094 24.078125 z M 65.501953 26.78125 A 0.50005 0.50005 0 0 0 65.21875 27.697266 C 65.896135 28.160326 66.552092 28.652154 67.181641 29.171875 A 0.50014932 0.50014932 0 0 0 67.818359 28.400391 C 67.163908 27.860112 66.481865 27.351987 65.78125 26.873047 A 0.50005 0.50005 0 0 0 65.501953 26.78125 z M 38.505859 34.007812 C 37.845251 34.007813 36.824284 34.260032 35.978516 35.199219 C 35.271123 35.972723 32.998047 38.173727 32.998047 42.396484 C 32.998047 46.679817 36.023022 50.663593 36.412109 51.195312 L 36.414062 51.199219 L 36.416016 51.201172 C 36.430436 51.220332 36.575724 51.438775 36.775391 51.734375 C 36.975058 52.029975 37.248201 52.42704 37.589844 52.898438 C 38.273129 53.841229 39.231039 55.081376 40.439453 56.410156 C 42.856281 59.067717 46.270549 62.086384 50.5 63.777344 L 50.5 63.779297 C 53.950904 65.155835 56.049506 65.717908 57.503906 65.916016 C 58.958307 66.114123 59.774729 65.934404 60.470703 65.871094 L 60.472656 65.871094 C 61.387233 65.783994 62.594991 65.255966 63.746094 64.501953 C 64.897196 63.747941 65.973248 62.780676 66.378906 61.625 C 66.731316 60.624677 66.90952 59.697083 66.972656 58.958984 C 67.004226 58.589935 67.006568 58.268044 66.986328 58 C 66.966088 57.731956 66.952928 57.536276 66.816406 57.300781 L 66.814453 57.300781 C 66.637307 56.996725 66.369529 56.822032 66.078125 56.660156 C 65.787163 56.498526 65.449818 56.34545 65.052734 56.144531 L 65.050781 56.144531 C 64.637858 55.933746 63.442559 55.335311 62.248047 54.751953 C 61.052867 54.16827 59.91589 53.618524 59.449219 53.445312 L 59.447266 53.445312 C 59.064546 53.305532 58.679978 53.164003 58.230469 53.216797 C 57.78096 53.269587 57.352991 53.568619 57.033203 54.052734 C 56.544054 54.793239 54.963453 56.687978 54.5 57.222656 L 54.5 57.224609 L 54.498047 57.224609 C 54.307125 57.445275 54.196764 57.501114 54.064453 57.517578 C 53.932143 57.534038 53.705281 57.493568 53.341797 57.3125 L 53.345703 57.316406 C 52.873162 57.075171 52.068986 56.779112 50.955078 56.175781 C 49.841171 55.57245 48.447878 54.678493 46.929688 53.306641 C 44.585287 51.188617 42.970013 48.538118 42.507812 47.734375 L 42.507812 47.732422 C 42.322359 47.412661 42.342497 47.293967 42.390625 47.162109 C 42.438345 47.031376 42.583064 46.859731 42.78125 46.658203 L 42.785156 46.654297 C 43.200691 46.240138 43.642306 45.646556 44.033203 45.185547 L 44.035156 45.183594 L 44.035156 45.181641 C 44.474846 44.654232 44.641734 44.250708 44.908203 43.716797 L 44.910156 43.714844 L 44.910156 43.712891 C 45.255851 43.00208 45.073483 42.306015 44.84375 41.833984 C 44.81903 41.781934 44.67238 41.42699 44.486328 40.964844 C 44.299771 40.501443 44.059641 39.903463 43.804688 39.267578 C 43.294778 37.995809 42.722418 36.57638 42.353516 35.746094 C 42.023682 35.00017 41.647885 34.547881 41.222656 34.298828 C 40.798805 34.050582 40.378251 34.037375 40.085938 34.027344 L 40.082031 34.027344 C 39.59203 34.006824 39.04652 34.007812 38.505859 34.007812 z M 38.505859 35.007812 C 39.047859 35.007812 39.583912 35.008017 40.042969 35.027344 L 40.044922 35.027344 L 40.046875 35.027344 C 40.336463 35.037344 40.523526 35.048914 40.716797 35.162109 C 40.910068 35.275306 41.161287 35.521315 41.439453 36.150391 L 41.439453 36.152344 C 41.792551 36.947058 42.367862 38.370894 42.876953 39.640625 C 43.131499 40.275491 43.371026 40.871978 43.558594 41.337891 C 43.746162 41.803803 43.868468 42.11061 43.943359 42.267578 L 43.943359 42.269531 L 43.945312 42.271484 C 44.117584 42.625453 44.200021 42.888202 44.011719 43.275391 C 43.732078 43.836093 43.628816 44.10771 43.267578 44.541016 L 43.271484 44.539062 C 42.849498 45.036737 42.395601 45.631526 42.076172 45.949219 L 42.074219 45.951172 L 42.072266 45.953125 C 41.866106 46.162324 41.597043 46.42067 41.451172 46.820312 C 41.3053 47.219955 41.353032 47.735136 41.642578 48.234375 C 42.131246 49.08401 43.779342 51.807915 46.259766 54.048828 C 47.843016 55.479235 49.308033 56.420713 50.478516 57.054688 C 51.649358 57.688856 52.55612 58.035267 52.892578 58.207031 L 52.894531 58.207031 L 52.896484 58.208984 C 53.348 58.433911 53.76331 58.562551 54.1875 58.509766 C 54.611115 58.457056 54.970009 58.206586 55.253906 57.878906 C 55.740453 57.317584 57.27629 55.501011 57.869141 54.603516 C 58.090353 54.268631 58.203462 54.22569 58.345703 54.208984 C 58.487944 54.192274 58.744235 54.253544 59.103516 54.384766 C 59.387252 54.490292 60.619807 55.069829 61.808594 55.650391 C 62.998414 56.231457 64.200934 56.832627 64.597656 57.035156 L 64.599609 57.035156 C 65.017738 57.246782 65.358451 57.403579 65.591797 57.533203 C 65.825143 57.662827 65.927318 57.761791 65.951172 57.802734 C 65.914652 57.739734 65.975324 57.878684 65.990234 58.076172 C 66.005144 58.273659 66.002419 58.547971 65.974609 58.873047 C 65.918999 59.523198 65.758137 60.377292 65.435547 61.292969 C 65.166206 62.060292 64.247616 62.979278 63.199219 63.666016 C 62.150821 64.352753 60.955329 64.820103 60.378906 64.875 C 59.591675 64.94676 58.967575 65.104839 57.638672 64.923828 C 56.308822 64.742686 54.27919 64.209071 50.871094 62.849609 C 46.851545 61.242569 43.534109 58.32722 41.179688 55.738281 C 40.002477 54.443812 39.065309 53.232645 38.398438 52.3125 C 38.065002 51.852427 37.799306 51.465642 37.603516 51.175781 C 37.407726 50.885921 37.302422 50.715952 37.214844 50.599609 C 36.797398 50.029115 33.998047 46.195201 33.998047 42.396484 C 33.998047 38.519242 35.92619 36.737542 36.716797 35.873047 L 36.716797 35.871094 L 36.71875 35.871094 C 37.356331 35.161334 38.097339 35.007812 38.505859 35.007812 z" /></svg>

                    </a>
                </div>






                <button
                    className="hamburger md:hidden text-white cursor-pointer text-xl leading-none md:px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none z-50"
                    aria-controls="mobile-nav"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </button>


                <nav>
                    <aside
                        className={`transform top-0 z-20 right-0 w-64 bg-navside fixed h-full overflow-auto ease-in-out rounded-l-xl transition-all duration-300 z-30"
                                    ${isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'}`}>
                        <ul className="items-center justify-between text-base text-white pt-4 mt-14 ml-20 lg:pt-0">
                            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white" href="/">Home Page</a></li>
                            <li className="flex"><button onClick={() => setShowMenu(!showMenu)} className="lg:p-4 flex animate py-3 px-0 border-b-2 border-transparent hover:border-white" >Barbering
<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-white mt-1 pl-1" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 256 256" style={{ enableBackground: "new 0 0 512 512" }}><g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093   " />
                                        </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                </g></svg>
                            </button></li>
                            {showMenu == true &&

                                <div className="menu">
                                    <button> Menu item 1 </button>
                                    <button> Menu item 2 </button>
                                    <button> Menu item 3 </button>
                                </div>

                            }

                            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white lg:mb-0 mb-2" href="/contact">İletişim</a></li>
                            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white lg:mb-0 mb-2" href="/portfoy">Satılık <br />Portföyümüz</a></li>
                            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white lg:mb-0 mb-2" href="/kiralik">Kiralık <br /> Portföyümüz</a></li>

                        </ul>
                    </aside>



                </nav>

            </div>


            <div className="w-full bg-white flex-wrap px-4  space-x-4 flex">
                <Dropdown category={`Brands`} cat1="Absolute" cat1url="Absolute" cat2="Arko" cat2url="Arko" cat3="Barbicide" cat3url="Barbicide" cat4="Totex" cat4url="Totex" cat5="All Brands" url="brands" />
                <Dropdown category={`Hair&Care`}  cat1="Hair Spray" cat1url="hairspray" cat2="Hair Wax" cat2url="hairwax" cat3="Hair Oil" cat3url="hairoil" cat4="Shampoo" cat4url="shampoo"  cat5="Gum Gel" cat5url="gumgel"  cat6="Conditioner Spray" cat6url="conditioner" cat7="All Hair&Care" url={`haircare`} />
                <Dropdown category={`Beard&Shave`}  cat1="Razors" cat1url="razors" cat2="After Shave" cat2url="aftershave" cat3="Beard Oil" cat3url="beardoil"  cat4="All Beard&Shave" url="beardandshave" />
                <Dropdown category={`Barbering`} cat1="Electrical" cat1url="electrical" cat2="Scissors" cat3="Aprons" cat3url="aprons"  cat4="Hygiene" cat4url="hygiene" cat5="All" url="barbering" />



            </div>


        </div>
    )
}
