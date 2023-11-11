import { useEffect, useState } from "react"
import BackProject from "../components/BackProject"
import DeleteProject from "../components/DeleteProject"
import ProjectBackers from "../components/ProjectBackers"
import ProjectDetails from "../components/ProjectDetails"
import UpdateProject from "../components/UpdateProject"
import { getBackers, loadProject } from "../services/blockchain"
import { useParams } from "react-router-dom"
import { useGlobalState } from "../store"
import ChatAuth from '../components/ChatAuth'
import { getGroup } from "../CometChat"

const Project = () => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [project] = useGlobalState('project')
  const [backers] = useGlobalState('backers')
  const [group] = useGlobalState('group')
  const [currentUser] = useGlobalState('currentUser')

  useEffect(async () => {
    if (currentUser) getGroup('pid_' + id)
    await loadProject(id)
    await getBackers(id)
    setLoaded(true)
  }, [currentUser])

  return loaded ? (
    <>
      <ProjectDetails group={group} project={project} />
      <UpdateProject project={project} />
      <DeleteProject project={project} />
      <BackProject project={project} />
      <ProjectBackers backers={backers} />
      <ChatAuth project={project} />
    </>
  ) : null
}

export default Project
