import './animals.css';
import React from "react";
import AnimalDetails from "../animal-details/animal-details";
import {NavLink} from "react-router-dom";

function Animals({
                     animals,
                     showDetails,
                     expandedAnimal,
                     hideShowCats,
                     hideCats,
                     onInputChanged,
                     showForm,
                     removeAnimal,
                     style
                 }) {
    return (
        <section className="animals" style={style}>
            <div className="container">
                <h1 className="animals__header">Поиск домашних животных</h1>
                <input className="animals-search__input" id="search-text"
                       placeholder="Поиск" size="40"
                       type="text"
                       onChange={(event) => onInputChanged(event.target.value)}/>
                <div className="animals__control-panel">
                    <div onClick={() => hideShowCats()}
                         className="animals__control-panel--hide">{hideCats ? 'Скрыть котиков' :
                        'Показать котиков'}
                    </div>
                    <div onClick={() => {
                        showForm()
                    }} className="animals__control-panel--add">Добавить животного
                    </div>
                </div>
                <div className="animals__list">
                    {animals.filter((data) => {
                        if (hideCats)
                            return data
                        else return data[3] !== 'Котик'
                    }).map((item, key) => (
                        <div onClick={() => showDetails(key)} className="animals__item" key={key}>
                            <div className="animals__image-wrapper">
                                <img alt="" className="animals__img" src={item[8]}/>
                                <NavLink onClick={(e) => e.stopPropagation()} to={`edit/${item[0]}`}
                                         className="animals__edit">
                                </NavLink>
                                <div onClick={(e) => {
                                    e.stopPropagation();
                                    removeAnimal(item[0])
                                }}
                                     className="animals__delete"/>
                            </div>
                            <div className="animals__name">{item[2]}</div>
                            <div className="animals__type">{item[3]}</div>
                            {expandedAnimal === key && (
                                <AnimalDetails animals={item}/>
                            )}

                            <svg fill="none" height="10" viewBox="0 0 187 10" width="187"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.63672 5.04811C3.30813 4.06046 5.36879 3.69373 6.97559 2.67122C7.46171 2.36187 6.93827 3.10694 6.87503 3.19231C6.2998 3.96887 5.75998 4.78083 5.1655 5.54178C5.04675 5.69377 3.68751 6.88116 4.5 7.3793C5.41869 7.3793 5.68379 6.40875 6.32652 5.86174C7.20364 5.11526 8.11492 4.08727 9.20622 3.65854C10.0066 3.3441 10.9735 3.18147 11.7111 2.74435C12.4062 2.33247 11.6529 2.86528 11.4368 3.07346C10.5881 3.89135 9.85506 4.71729 9.09652 5.61491C8.79069 5.9768 7.88978 6.80982 7.88978 7.35187C7.88978 7.41213 10.4542 6.05922 10.6689 5.94402C12.6117 4.90154 14.3919 3.68956 16.5746 3.18316C16.8185 3.12658 18.5679 2.73881 17.3974 2.98204C15.0011 3.47997 12.7189 4.00954 10.6415 5.3498C8.45596 6.75982 11.8683 6.22969 12.735 5.90745C15.1249 5.01891 17.484 4.17582 19.9205 3.42085C20.7089 3.17656 23.1685 2.90891 22.3431 2.90891C19.7521 2.90891 17.0488 4.98668 14.9199 6.26399C14.2668 6.65585 12.6535 7.40494 14.5 7.3793C15.9364 7.35935 17.0688 6.97708 18.3298 6.36455C19.7265 5.68617 21.1696 5.09064 22.59 4.46303C23.8326 3.91397 25.1389 3.57429 26.4113 3.11003C26.9607 2.90956 27.6439 2.48838 28.2397 2.48838C29.0219 2.48838 26.8355 3.17842 26.137 3.53056C24.9544 4.12675 23.7098 4.89065 22.7545 5.81603C21.8615 6.68118 20.6873 7.72917 23 7.08676C25.507 6.39037 27.441 5.35099 29.7755 4.23448C30.8494 3.7209 32.0059 3.34783 33.0666 2.81749C35.547 1.57728 25.0735 4.26487 25.8353 6.93135C26.1171 7.91743 30.37 5.62589 30.5251 5.54178C31.9973 4.74372 33.8917 3.98536 35.0961 2.78092C35.2994 2.57764 34.491 2.71977 34.2368 2.85405C33.3828 3.30519 31.2635 6.8968 31.58 6.97352C32.4298 7.17955 33.0842 6.74298 33.6882 6.36455C35.6768 5.11871 37.646 4.01615 39.8316 3.1466C40.0529 3.05856 40.8815 2.72237 40.2064 3.00033C39.2083 3.4113 38.1723 3.78785 37.153 4.14306C35.613 4.67975 34.0809 5.12386 32.7558 6.11772C32.58 6.24954 32.1201 6.58967 32.9787 6.05933C34.705 4.99307 35.2865 4.66572 37.1896 3.91452C38.5134 3.39196 39.8981 3.10092 41.2486 2.67122C41.5357 2.57985 40.7055 2.93607 40.4533 3.10089C39.3013 3.85348 38.2421 4.80429 37.3724 5.87088C37.0624 6.25118 36.8295 6.62308 36.6868 7.08676C36.6547 7.19096 36.4343 7.40381 36.5405 7.3793C37.3811 7.18532 38.2745 6.55565 39.0363 6.18171C40.5799 5.42392 42.1422 4.73172 43.7443 4.1065C43.8688 4.05795 47.0354 3.04219 47.0354 2.82663C47.0354 2.65116 45.5638 2.7525 45.4447 2.76264C43.7991 2.90269 42.2504 3.5564 40.8372 4.38075C40.1046 4.80814 39.1832 5.48849 39.3379 6.45597C39.5078 7.51773 40.4616 7.37529 41.2486 7.06847C43.4203 6.22187 45.5259 5.02941 47.5748 3.92366C48.1332 3.62231 49.6341 3.07743 49.0832 2.76264C48.3968 2.37041 46.0845 4.33882 45.6093 4.719C45.4674 4.8325 43.1039 7.07988 43.4701 7.31531C43.7527 7.49698 44.8705 6.95677 45.0608 6.87649C46.4089 6.30763 47.5803 5.45009 48.8272 4.70072C49.136 4.51515 52.8134 2.19612 53.0325 2.41524C53.1021 2.48487 52.8488 2.48616 52.7583 2.52495C52.4015 2.67786 52.1294 2.81292 51.7892 3.01861C50.8974 3.55787 50.0243 4.20431 49.2661 4.92013C48.6418 5.50939 47.2183 5.87559 47.2183 6.84554C47.2183 7.43423 48.6555 6.40788 48.7358 6.35187C50.2897 5.26889 51.8701 5.13139 53.5445 4.24362C54.4723 3.75168 55.7237 3.59304 56.5704 3.00033C56.7833 2.85133 55.77 4.09592 55.6288 4.30762C55.1664 5.00128 54.4734 6.0595 54.3215 6.89478C54.2757 7.14678 54.7573 6.62197 54.9523 6.45597C55.7744 5.75631 56.5879 5.05582 57.4664 4.42646C57.5647 4.356 59.4999 2.971 59.1028 2.91805C57.7545 2.73829 56.5034 3.72936 55.5648 4.56359C55.3975 4.71237 53.443 6.60618 54.4221 6.68451C56.0719 6.81649 57.5625 5.57084 58.8376 4.70072C60.0271 3.88907 61.5364 3.12581 62.5767 2.1227C62.8229 1.88522 62.4492 1.97702 62.339 2.03128C61.4126 2.48754 60.6139 3.25197 59.9072 3.98765C58.9559 4.97812 58.2923 6.24251 57.3292 7.2056C57.1606 7.37427 56.7668 7.43492 56.5613 7.27874C55.4358 6.42335 56.9165 2.97161 54.3307 4.00593C53.6344 4.28446 50.6577 7.15041 52.2646 7.80897C53.4069 8.27714 54.9598 7.91785 56.0402 7.47986C59.1322 6.22637 62.0608 4.60861 65.2004 3.45742C65.8406 3.22267 66.0957 3.28705 65.4015 3.07346C64.7161 2.86255 64.3546 2.52316 63.6097 2.90891C62.0843 3.69888 60.9071 5.075 59.6421 6.20913C59.081 6.71225 58.5826 7.3108 59.7061 7.07762C62.44 6.51021 64.9851 4.88538 67.6047 3.9328C67.6187 3.92773 69.5794 3.32345 69.5794 3.15574C69.5794 2.99416 67.1283 4.74208 66.9648 4.88356C66.2125 5.53445 65.4699 6.20491 64.7707 6.91306C64.7272 6.95711 64.0111 7.66036 64.6062 7.40672C66.7733 6.48305 68.5322 4.67425 70.585 3.53056C70.8802 3.36607 71.6349 2.92656 71.0238 3.49399C69.7299 4.69546 68.113 5.43477 67.5682 7.15636C67.3523 7.83839 68.1337 7.44142 68.3909 7.28435C69.3825 6.67888 70.2692 6.83827 71.1518 6.09029C72.4541 4.98662 73.7651 3.88043 75.0645 2.78092C75.5726 2.35103 75.0466 3.21445 74.9183 3.34772C73.8514 4.45564 72.821 5.65821 72.0203 6.97706C71.398 8.00204 72.8444 7.06631 73.1264 6.88564C74.7769 5.82834 76.3815 4.62509 77.9351 3.42999C78.9386 2.65809 77.7047 3.75627 77.414 4.18877C77.0821 4.68252 75.5836 6.87876 75.8873 7.56214C76.0497 7.92745 77.8426 5.95204 77.8711 5.92574C79.0903 4.79886 80.4739 3.34308 82.0124 2.64379C82.4033 2.46608 81.369 3.21294 81.0525 3.50313C80.1702 4.31184 79.4476 5.22832 78.7213 6.17257C77.9957 7.11576 80.5112 5.50268 80.7508 5.37722C81.4305 5.02137 83.3343 4.36989 83.7493 3.60369C83.9125 3.3024 83.0641 3.45989 82.7254 3.51227C81.0236 3.77554 79.3501 4.206 77.6608 4.53617C77.4529 4.57681 75.9384 4.89314 77.094 4.6093C78.382 4.29296 79.646 3.88667 80.9336 3.56712C81.7864 3.35549 83.6876 2.57194 84.5904 2.85405C84.7953 2.91809 84.2452 3.11081 84.0602 3.21973C83.4303 3.59056 83.1376 3.75864 82.5243 4.20706C81.6001 4.88286 80.5861 5.65023 79.9463 6.62052C79.8563 6.75695 79.4006 7.49645 79.928 7.37016C80.952 7.12498 81.9252 6.3977 82.7803 5.83432C84.1764 4.9145 85.5337 3.937 86.9307 3.01861C88.4381 2.02767 85.4623 3.77752 85.1389 4.06079C84.9103 4.26105 82.9452 6.79095 83.0363 6.78507C83.6832 6.74334 84.5292 6.06151 85.0475 5.76118C86.4183 4.96681 87.8023 4.20694 89.1979 3.45742C89.7791 3.14532 90.234 2.76057 89.3808 3.32943C88.3963 3.98571 87.4849 4.75332 86.693 5.63319C86.4052 5.95304 85.4935 6.77674 85.9068 6.65709C87.043 6.3282 88.1808 5.62002 89.1979 5.04811C90.2717 4.44435 91.3666 3.80084 92.3244 3.01861C92.6877 2.72194 92.408 2.74514 92.1233 2.89062C90.7914 3.5714 89.5779 4.6322 88.4666 5.61491C87.8967 6.11879 86.3184 7.48162 87.077 7.42501C88.022 7.35448 89.1721 6.51897 89.9475 6.05372C91.0486 5.39307 92.0842 4.63032 93.2386 4.06079C93.885 3.74191 94.5071 3.35266 95.1036 3.03689C95.3872 2.88675 95.5091 2.73365 95.0396 2.95462C93.2718 3.7865 92.2296 4.53946 91.3772 6.31531C90.831 7.45325 91.7058 7.5017 92.4743 6.95524C94.578 5.45927 95.2721 4.59354 97.1879 2.88148C97.2604 2.81669 97.494 2.649 97.4348 2.72607C97.3104 2.88777 96.5901 3.7223 96.5663 3.74996C95.9901 4.41907 95.3932 5.0704 94.8659 5.77947C94.7453 5.9417 94.0216 6.7643 94.7653 6.49253C96.1998 5.96839 97.4871 4.83269 98.7146 3.96023C99.3848 3.48392 101.502 2.47009 100.68 2.47009C100.108 2.47009 99.2916 3.17988 98.9249 3.52141C97.935 4.4435 98.0367 5.60561 97.4383 6.82164C97.4087 6.88186 96.9176 7.93203 97.4474 7.64441C99.3484 6.61248 99.9246 4.71478 101.667 3.42085C101.961 3.20287 102.856 2.57035 102.545 2.76264C101.583 3.35733 100.765 4.22853 100.04 5.08468C100.029 5.09746 98.988 6.24966 99.2906 6.45597C99.6126 6.67552 100.727 5.71502 100.918 5.57834C102.311 4.58027 106.486 1.57997 105.068 2.54323C103.773 3.4233 101.54 5.08451 101.43 6.83993C101.4 7.32292 102.225 6.28703 102.6 5.98059C103.56 5.19534 104.518 4.42264 105.562 3.74996C106.217 3.32749 108.224 2.12375 107.555 2.52495C106.917 2.90786 106.358 3.40624 105.818 3.91452C104.999 4.68536 104.125 5.49221 103.478 6.4194C103.392 6.54245 103.019 7.09978 103.478 6.94963C105.086 6.42308 106.548 5.22186 108.076 4.49046C108.839 4.12523 109.79 3.80207 110.334 3.11003C110.387 3.04225 110.452 2.82574 110.371 2.85405C110.119 2.94173 109.551 3.39485 109.438 3.48485C109.017 3.81942 106.05 6.30063 106.494 7.07762C106.599 7.26036 111.769 3.27949 112.19 2.98204C112.851 2.51468 113.364 2.1913 112.647 3.05518C111.957 3.88623 111.23 4.68611 110.526 5.50521C110.203 5.88129 108.509 7.37757 109.95 6.65709C111.926 5.66904 113.541 4.03755 115.389 2.84491C115.478 2.78804 116.835 2.01503 116.505 2.14099C115.107 2.67363 113.367 4.29561 112.784 5.66976C112.627 6.03984 112.502 6.64956 113.095 6.27313C114.205 5.56869 115.262 4.78762 116.386 4.09735C117.005 3.71692 118.149 3.24424 118.562 2.5798C118.91 2.01947 117.575 3.47042 117.19 4.00593C116.826 4.51325 115.328 6.45585 115.764 7.2056C115.991 7.59458 118.828 5.13042 118.964 5.02983C120.154 4.14984 121.393 3.38882 122.694 2.6895C123.011 2.51907 123.179 2.30455 122.712 2.48838C120.868 3.2147 119.464 5.43675 118.598 7.11418C117.857 8.55003 119.91 6.5421 120.207 6.3097C121.792 5.07089 126.595 1.41823 124.979 2.61636C123.249 3.89952 121.535 4.73965 120.5 6.65709C119.782 7.98651 121.857 7.22173 122.054 7.07762C123.84 5.77114 125.782 4.49537 127.804 3.58541C127.936 3.52616 128.255 3.24871 128.115 3.28372C127.418 3.45806 126.759 4.04859 126.277 4.54531C125.524 5.3222 124.878 6.23933 124.312 7.15989C124.019 7.63543 124.398 7.45152 124.696 7.30616C126.868 6.24661 128.788 4.69675 130.967 3.62197C131.243 3.48582 132.049 3.05288 131.753 3.13745C130.627 3.45926 129.598 4.23119 128.728 4.98412C127.937 5.66741 127.201 6.44693 126.671 7.35187C126.639 7.4051 126.552 7.56626 126.57 7.50729C126.645 7.26202 126.728 7.09022 126.863 6.84907C127.108 6.41076 129.881 3.07743 129.678 2.90891C128.451 1.88637 125.892 3.98782 125.107 4.66415C124.387 5.28482 123.712 5.99837 122.932 6.54739C122.462 6.87799 123.782 5.77429 124.23 5.41379C125.551 4.34878 126.862 3.61039 128.526 3.23801C129.578 3.00271 130.652 2.92214 131.726 2.87234C132.477 2.83753 133.003 2.75328 132.238 3.45742C131.281 4.33849 130.309 5.19003 129.441 6.16342C129.241 6.38764 128.126 7.44328 128.161 7.82725C128.174 7.97543 128.408 7.662 128.526 7.57128C128.853 7.3202 129.212 7.03872 129.532 6.78507C130.624 5.91948 131.723 5.07995 132.878 4.29848C132.997 4.21778 134.178 3.43723 134.396 3.29287C134.535 3.20034 134.849 2.85451 134.816 3.01861C134.762 3.29123 133.913 3.94412 133.756 4.11564C132.958 4.98483 130.589 7.49542 131.635 6.94963C133.326 6.06712 134.686 4.49157 136.279 3.42999C136.322 3.40096 137.201 2.72926 136.507 3.13745C135.577 3.68449 134.784 4.54181 134.039 5.30409C133.798 5.55017 131.03 8.57138 132.933 7.27874C134.588 6.15427 135.963 4.63733 137.577 3.44828C137.707 3.35234 137.33 3.65826 137.22 3.77739C136.309 4.76954 135.466 5.85768 134.679 6.94963C134.345 7.41346 134.967 7.85083 135.5 7.64441C136.508 7.25409 135.987 7.0273 136.763 6.3097C137.906 5.25362 140.72 1.52193 139.872 2.82663C139.169 3.90813 137.5 5.04373 137.303 6.37369C137.232 6.85305 137.888 6.35883 137.888 6.51996C137.888 6.90092 137.756 6.91636 137.888 7.27874C138.087 7.82726 139.121 6.96604 139.14 6.94049C139.921 5.91815 140.576 4.81312 141.38 3.80481C141.655 3.45923 142.401 2.40936 142.285 2.83577C141.97 3.99203 140.886 5.36436 140.886 6.56567C140.886 7.10069 141.803 6.00622 142.212 5.66062C143.361 4.68796 144.554 3.68855 145.549 2.55237C145.597 2.49724 145.676 2.30576 145.613 2.34211C145.372 2.47988 145.009 2.81724 144.845 2.9729C144.074 3.70279 143.478 4.51617 142.934 5.42293C142.578 6.01693 141.653 7.52427 142.897 6.36455C143.567 5.74105 144.181 5.06342 144.799 4.38989C145.15 4.0071 145.778 3.31117 146.152 2.90891C146.304 2.74469 146.503 2.24707 146.627 2.43353C146.788 2.675 144.214 6.18361 143.995 6.69366C143.702 7.37422 144.395 6.92702 144.634 6.74851C145.546 6.06982 146.239 5.08037 146.993 4.24362C147.558 3.61636 148.151 2.86672 148.821 2.34211C149.425 1.86989 147.995 3.63323 147.615 4.29848C147.207 5.01157 146.907 5.73571 146.646 6.51082C146.516 6.8952 146.443 7.02569 146.792 6.6388C147.918 5.39119 151.644 2.001 150.321 3.03689C149.23 3.8904 148.28 5.5362 148.255 6.94963C148.244 7.55948 148.988 6.58263 149.004 6.56567C150.107 5.42621 151.224 4.30795 152.46 3.31115C152.698 3.11893 153.44 2.59875 153.246 2.83577C152.551 3.6853 151.773 4.4427 151.116 5.33151C151.007 5.47924 149.945 6.71611 150.101 7.06847C150.149 7.17596 150.344 7.0367 150.44 6.96791C150.867 6.66008 151.363 6.18362 151.729 5.84346C153.002 4.65915 154.294 3.44233 155.842 2.61636C155.973 2.54676 154.873 3.46656 154.873 3.46656C154.016 4.26186 153.235 5.11128 152.579 6.08115C152.324 6.45698 151.548 7.18148 151.985 7.30616C152.21 7.37053 153.283 6.19486 153.338 6.14514C154.8 4.81537 156.284 3.48757 157.534 1.94901C158.116 1.23272 157.399 2.34667 157.287 2.53409C156.543 3.7819 155.781 5.00932 155.02 6.2457C154.066 7.79568 156.702 5.22848 156.976 4.95669C157.922 4.01821 160.681 1.15152 159.901 2.2324C158.882 3.64674 157.539 5.17517 157.049 6.87649C156.594 8.46007 158.878 5.66494 158.987 5.54178C159.872 4.54064 162.643 1.64462 161.766 2.65293C160.734 3.83994 159.983 5.33378 159.481 6.82164C159.285 7.40226 159.344 7.43878 159.847 6.94963C160.767 6.05435 161.659 5.12962 162.571 4.22534C162.944 3.85492 163.328 3.50279 163.714 3.1466C163.948 2.92997 163.197 3.53466 163.001 3.78653C162.273 4.71922 161.573 5.79496 161.108 6.88564C160.821 7.56019 161.224 7.3458 161.556 7.01362C162.606 5.96343 163.525 4.78551 164.619 3.77739C164.645 3.75296 165.954 2.60863 165.414 3.38429C164.672 4.45091 164.016 5.52124 163.448 6.69366C163.438 6.71566 162.378 8.60412 163.174 7.97352C165.03 6.50269 170.255 1.68121 168.495 3.26544C167.336 4.30855 166.399 5.64333 165.579 6.95877C165.351 7.32282 164.779 8.41156 165.131 8.1655C166.9 6.92683 168.167 5.08338 169.903 3.80481C170.693 3.2225 169.632 4.60636 169.619 4.62758C169.124 5.45993 168.591 6.33637 168.239 7.24217C168.033 7.77089 168.61 7.19223 168.678 7.13247C169.512 6.39606 170.287 5.60865 171.164 4.92013C171.601 4.57756 172.908 3.54731 172.462 3.87795C171.725 4.42531 171.229 5.4107 170.78 6.18171C170.484 6.69159 169.517 7.65213 170.086 7.80897C170.705 7.9799 172.111 6.29264 172.353 6.05372C173.461 4.95943 174.47 3.69481 175.662 2.6895C175.982 2.41966 175.677 2.99253 175.662 3.01861C174.913 4.31771 173.102 5.11349 173.102 6.69366C173.102 8.91551 179.67 0.934868 178.551 2.85405C178.297 3.28922 177.796 3.7019 177.49 4.08821C176.714 5.07118 176.133 6.16689 175.406 7.17818C175.237 7.41361 175.349 5.97484 174.931 5.81603C174.275 5.56744 172.854 6.25722 173.02 5.29494C173.143 4.58429 173.654 4.72189 174.026 4.20706C174.513 3.53167 175.282 3.11746 175.763 2.45181C176.665 1.20256 172.877 3.69637 171.749 4.74643C170.805 5.62528 171.661 3.42261 171.777 3.12831C172.446 1.42511 170.673 3.68655 170.332 4.1065C169.682 4.90841 170.005 4.46228 170.14 3.85966C170.503 2.24061 167.881 5.35267 168.019 5.35894C168.481 5.37992 169.575 4.64411 169.994 4.48131C171.056 4.06839 172.121 3.65779 173.194 3.27458C174.135 2.9385 175.066 2.86691 176.064 2.98204C176.894 3.07776 175.56 5.79416 175.443 6.07201C175.048 7.0114 175.242 7.17852 176.064 6.38283C176.951 5.5254 177.732 4.56379 178.587 3.67683C178.653 3.60889 179.103 3.12234 178.697 3.60369C178.154 4.2479 177.597 4.9045 177.198 5.65148C176.893 6.22184 177.313 5.86344 177.545 5.63319C178.189 4.99661 178.868 4.3349 179.429 3.62197C180.375 2.41774 175.618 8.29063 176.905 7.46158C178.618 6.3587 179.571 4.30093 181.239 3.11003C182.131 2.47276 181.424 3.3148 181.147 3.62197C180.377 4.47611 179.622 5.33185 178.935 6.25484C178.59 6.71825 178.246 7.12735 179.045 6.38283C180.076 5.42146 181.09 4.4427 182.098 3.45742C182.166 3.39088 182.377 3.20024 182.317 3.27458C182.039 3.62252 181.738 3.9521 181.458 4.29848C181.349 4.43301 179.527 6.7192 179.977 6.85821C180.695 7.08016 182.079 5.2413 182.482 4.82871C182.89 4.41128 183.123 4.17589 183.561 3.80481C183.725 3.66605 184.101 3.22468 184.091 3.43914C184.06 4.08398 182.629 5.45244 182.281 5.94402C182.126 6.16192 180.736 7.75256 180.91 8.13808C181.032 8.40939 185.11 4.07878 185.279 3.89623"
                                    stroke="#60C1A4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            </svg>
                        </div>))}
                </div>
            </div>
        </section>);
}

export default Animals;