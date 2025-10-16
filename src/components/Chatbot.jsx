import { BubbleChat } from 'flowise-embed-react'

const Chatbot = () => {
    return (
        <BubbleChat
            chatflowid="59888a6c-4621-465b-8daf-2e28799b42a0"
            apiHost="https://flowise.bienetresante.shop"
            chatflowConfig={{
                /* Configuration du flux de conversation */
            }}
            observersConfig={{
                /* Configuration des observateurs */
            }}
            theme={{
                button: {
                    backgroundColor: '#3B81F6',
                    right: 20,
                    bottom: 20,
                    size: 48,
                    dragAndDrop: true,
                    iconColor: 'white',
                    customIconSrc: 'chat.svg',
                    autoWindowOpen: {
                        autoOpen: true,
                        openDelay: 2,
                        autoOpenOnMobile: false
                    }
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Bonjour 👋 !',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16
                },
                disclaimer: {
                    title: 'Conditions d\'utilisation',
                    message: "En utilisant ce chatbot, vous acceptez les <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Conditions Générales d'Utilisation</a>",
                    textColor: 'black',
                    buttonColor: '#3b82f6',
                    buttonText: 'Commencer la discussion',
                    buttonTextColor: 'white',
                    blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backgroundColor: 'white'
                },
                customCSS: ``,
                chatWindow: {
                    showTitle: true,
                    showAgentMessages: true,
                    title: 'Assistant de  - agence immobilière',
                    titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                    welcomeMessage: 'Bonjour ! Je suis l\'assistant de agence immobilière. Comment puis-je vous aider aujourd\'hui ?',
                    errorMessage: 'Désolé, une erreur s\'est produite. Veuillez réessayer.',
                    backgroundColor: '#ffffff',
                    backgroundImage: '',
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    starterPrompts: [
                        "Quels la listes des biens a vendre? ",
                        "Quels la listes des biens a louer? ",
                        "Qui est immocrans et comment vous contacter?"
                    ],
                    starterPromptFontSize: 15,
                    clearChatOnReload: false,
                    sourceDocsTitle: 'Sources :',
                    renderHTML: true,
                    botMessage: {
                        backgroundColor: '#f7f8ff',
                        textColor: '#303235',
                        showAvatar: true,
                        avatarSrc: 'https://www.immomigimg.ch/s/824fb/1698/websites/logos/1698_5105_520fc4cc74b4b1f303a53be7ec1864b0df3a947e.svg'
                    },
                    userMessage: {
                        backgroundColor: '#3B81F6',
                        textColor: '#ffffff',
                        showAvatar: true,
                        avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
                    },
                    textInput: {
                        placeholder: 'Tapez votre question...',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 500,
                        maxCharsWarningMessage: 'Vous avez dépassé la limite de caractères. Veuillez saisir moins de 500 caractères.',
                        autoFocus: true,
                        sendMessageSound: true,
                        sendSoundLocation: 'send_message.mp3',
                        receiveMessageSound: true,
                        receiveSoundLocation: 'receive_message.mp3'
                    },
                    feedback: {
                        color: '#303235'
                    },
                    dateTimeToggle: {
                        date: true,
                        time: true
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Cree par',
                        company: 'Michel Ange',
                        companyLink: 'https://portfolio.bienetresante.shop/'
                    }
                }
            }}
        />
    )
}

export default Chatbot
