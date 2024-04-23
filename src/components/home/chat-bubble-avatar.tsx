import { IMessage } from '@/store/chat-store'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'

type ChatBubbleAvatarProps = {
  message: IMessage
  isMember: boolean
  isGroup: boolean | undefined
}

const ChatBubbleAvatar = ({
  message,
  isGroup,
  isMember,
}: ChatBubbleAvatarProps) => {
  if (!isGroup) {
    return null
  }
  return (
    <Avatar className="overflow-visible relative">
      <AvatarImage
        src={message.sender?.image}
        className="rounded-full object-cover w-8 h-8"
      />
      <AvatarFallback className="w-8 h-8">
        <div className="animate-pulse bg-gray-tertiary rounded-full"></div>
      </AvatarFallback>
    </Avatar>
  )
}
export default ChatBubbleAvatar
