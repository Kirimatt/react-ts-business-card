import React from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import '../App.css';
import springUrl from '../pages/skills/spring_logo.png'

const Skills: React.FC = () => {
    const {loading, error} = useTypedSelector(state => state.info)

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="hero">
            <div className="container hero__container">
                <div className="hero__about">
                    <h1 className="hero__title">Java</h1>
                    <h2 className="hero__subtitle">Spring boot</h2>
                    <br/>
                    <p className="hero__description">
                        Gitlab, GitHub, Gerrit
                    </p>

                    <p className="hero__description">
                        Maven, Gradle
                    </p>

                    <p className="hero__description">
                        JDBC, JDBI, PostgreSQL, MySQL, Cassandra, Hibernate
                    </p>

                    <p className="hero__description">
                        k8s, Jenkins, OpenShift, Docker
                    </p>

                    <p className="hero__description">
                        Feign, Lombok, Tomcat, Swagger/OpenAPI
                    </p>

                    <p className="hero__description">
                        JUnit, PowerMockito
                    </p>

                    <p className="hero__description">
                        React, JavaScript, TypeScript
                    </p>

                    <p className="hero__description">
                        Agile, Scrum
                    </p>

                </div>

                <div className="hero__box__green">
                    <img className="hero__box-img" src={springUrl} alt=""/>
                </div>

            </div>
        </div>
    );
}

export default Skills;