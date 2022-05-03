export type RootStackParamList = {
    Login: undefined;
    Root: undefined;
    CreateProfile: undefined;
    ChatRoom: { id: string, user: string };
  };

export type TabsParamList = {
  Chats: undefined;
  Dashboard: undefined;
  Profile: undefined;
};

export type ChatParamItem = {
  item:{
    id: string;
    user: string;
    message?: string;
    time?: string;
    avatar?: string;
  },
}

export type User = {
  id: string;
  user: string;
}

export type SignData = {
  email: string;
  password: string;
}

export type Account = {
  user_id: string;
  user_name: string;
  user_description: string;
  user_image: string;
  user_theme_manual: boolean;
  user_theme_automatic: boolean;
}

export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: User;
}

export type ChatMessageProps = {
  message: Message;
  myId: string,
}