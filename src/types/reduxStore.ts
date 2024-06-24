export interface TeamCard {
  name: string
  surname: string
  position: string
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
