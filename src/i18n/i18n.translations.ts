import {namespaces} from "./i18n.constants";

export const ru = {
    [namespaces.common]: {
        buttons: {
            preview: "Главная",
            experience: "Опыт",
            skills: "Навыки",
            education: "Образование"
        },

    },
    [namespaces.pages.preview]: {
        specialization: "Java-разработчик",
        name: "Азамат Сегизбаев",
        description: "Я Java разработчик, который готов постоянно учиться и выполнять поставленные задачи в команде."
    },
    [namespaces.pages.education]: {
        name: "Омский государственный университет путей сообщения",
        specialization: "Информационная безопасность автоматизированных систем",
        degree: "Специалитет"
    },
    [namespaces.pages.experience]: {
        jobs: [
            {
                companyName: "Центр финансовых технологий",
                specialization: "Старший инженер-программист",
                date: "Июл 2022 - по н.в.",
                icon: "cftLogo",
                description: [
                    "Архитектурные решения микросервисов;",
                    "Добавление функционала, необходимого бизнесу;",
                    "Взаимодействие с front-end, аналитиками и клиентами для проработки более удобного и качественного FinTech продукта;",
                    "Оптимизация инфраструктуры для высоконагруженной системы.",
                ]
            },
            {
                companyName: "Epam Systems",
                specialization: "Инженер-программист",
                date: "Дек 2021 - Июн 2022",
                icon: "epamLogo",
                description: [
                    "Поддержка и доработка FinTech микросервисов;",
                    "Демо-показы разработанных функций;",
                    "Unit тестирование.",
                ]
            },
            {
                companyName: "Омский НИИ Приборостроения",
                specialization: "Инженер-программист",
                date: "Май 2021 - Ноя 2021",
                icon: "oniipLogo",
                description: [
                    "Занимался разработкой веб и десктоп решений:",
                    "Настройка и внедрение Vaadin-проекта на Spring;",
                    "Библиотеки для работы со звонками между терминалами, SSH и парсом Excel;",
                    "Desktop программа для настройки базовой станции;",
                    "Различные bash скрипты для автоматизации и инсталляции программного обеспечения.",
                ]
            },
        ]
    }
};

export const en = {
    [namespaces.common]: {
        buttons: {
            preview: "Main",
            experience: "Experience",
            skills: "Skills",
            education: "Education"
        },
    },
    [namespaces.pages.preview]: {
        specialization: "Java developer",
        name: "Azamat Segizbaev",
        description: "I am a Java developer, who is willing to study continuously and accomplish assigned tasks in a team."
    },
    [namespaces.pages.education]: {
        name: "Omsk State Transport University",
        specialization: "Information security of automated systems",
        degree: "Bachelor's degree"
    },
    [namespaces.pages.experience]: {
        jobs: [
            {
                companyName: "Center of financial technologies",
                specialization: "Software engineer",
                date: "Jul 2022 - Present",
                icon: "cftLogo",
                description: [
                    "Microservice architectural solutions;",
                    "Development of business-required functionalities;",
                    "Direct cooperation with frontend engineers, analysts and clients for FinTech product refinement;",
                    "Infrastructure optimization for high-load system.",
                ]
            },
            {
                companyName: "Epam Systems",
                specialization: "Software engineer",
                date: "Dec 2021 - Jun 2022",
                icon: "epamLogo",
                description: [
                    "Support and refinement of FinTech microservices;",
                    "Demo for developed features;",
                    "Unit tests.",
                ]
            },
            {
                companyName: "JSC Omsk Research Institute of Instrumentation",
                specialization: "Software engineer",
                date: "May 2021 - Nov 2021",
                icon: "oniipLogo",
                description: [
                    "Web and desktop solutions:",
                    "Configuration of Vaadin with Spring project;",
                    "Libraries for managing calls between terminals, SSH and Excel parsing;",
                    "Desktop application for base station configuration;",
                    "Bash scripts for autonomization and software installation.",
                ]
            },
        ]
    }
};