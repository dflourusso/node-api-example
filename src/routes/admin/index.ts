import { Request, Response, Router } from 'express'
const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ "error": false, "message": "Hello admin!" })
})

export default router