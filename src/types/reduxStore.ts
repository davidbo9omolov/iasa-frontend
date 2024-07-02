export type TeamCard = {
  name: string
  surname: string
  position: string
  image?: string
  email?: string
  socialNetworks?: { name: string; link: string }[]
}

export interface SelectedTeamCard {
  isOpen?: boolean
  teamCard: TeamCard
}

export interface AppState {
  user: {
    name: string
    email: string
    token: string
  }
  selectedTeamCard: SelectedTeamCard
}
