import "./Contact.css"
import Head from "react-document-configuration";
import emailjs from '@emailjs/browser';
import {Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import React, {useRef} from "react";

const initialValues = {
    raison: "projet",
};

export default function App() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: {
            raison: initialValues.raison,
        }
    });

    const onSubmit = () => {
        sendEmail();
    };

    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('service_ctklrym', 'template_p3bze2i', form.current, '5m__Y8nAXVr7eQkvd')
            .then((result) => {
                console.log(result.text);
                alert("Message envoyé avec succès");
            }, (error) => {
                console.log(error.text);
                alert("Erreur lors de l'envoi du message");
            });
    };

    return (
        <div className="contact-container">
            <Head title="Contact - Farmeurimmo" icon="logo.jpg"/>
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                <Form.Group className="field" controlId="pseudo">
                    <Form.Label>Pseudo / Appellation / Nom</Form.Label>
                    {errors.pseudo && <p className="errorMsg">{errors.pseudo.message}</p>}
                    <Form.Control
                        type="text"
                        className="content"
                        placeholder="Entrez votre pseudo / appellation / nom"
                        {...register("pseudo", {
                                required: "Merci d'entrer votre pseudo / appellation / nom",
                                minLength: {
                                    value: 2,
                                    message: "Merci d'entrer un pseudo / appellation / nom de plus de 2 caractères"
                                },
                                maxLength: {
                                    value: 32,
                                    message: "Merci d'entrer un pseudo / appellation / nom de moins de 32 caractères"
                                }
                            }
                        )}
                    />
                </Form.Group>
                <Form.Group className="field" controlId="email">
                    <Form.Label>Email</Form.Label>
                    {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                    <Form.Control
                        type="email"
                        className="content"
                        placeholder="Entrez votre email"
                        {...register("email", {
                            required: "Merci d'entrer votre adresse email",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Merci d'entrer une adresse email valide"
                            },
                            maxLength: {
                                value: 128,
                                message: "Merci d'entrer une adresse email de moins de 128 caractères"
                            },
                            minLength: {
                                value: 3,
                                message: "Merci d'entrer une adresse email de plus de 3 caractères"
                            }
                        })}
                    />
                </Form.Group>
                <Form.Group className="field" controlId="raison">
                    <Form.Label>Raison</Form.Label>
                    <Form.Select className="field" {...register("raison")} placeholder="Choisissez une option"
                                 id="choices">
                        <option id="choice" value="projet">Projet</option>
                        <option id="choice" value="recrutement">Recrutement</option>
                        <option id="choice" value="autre">Autre</option>
                    </Form.Select>
                </Form.Group>
                <Form.Text className="field">
                    <Form.Label>Message</Form.Label>
                    {errors.message && <p className="errorMsg">{errors.message.message}</p>}
                    <Form.Control
                        as="textarea"
                        className="content"
                        id="message"
                        placeholder="Entrez votre message"
                        rows={3}
                        {...register("message", {
                                required: "Merci d'entrer votre message",
                                minLength: {
                                    value: 16,
                                    message: "Merci d'entrer un message de plus de 16 caractères"
                                },
                                maxLength: {
                                    value: 128,
                                    message: "Merci d'entrer un message de moins de 128 caractères"
                                },
                            }
                        )}
                    />
                </Form.Text>
                <Button type="submit" variant="primary" className="field" id="submit-btn">
                    Submit
                </Button>
            </form>
        </div>
    );
}