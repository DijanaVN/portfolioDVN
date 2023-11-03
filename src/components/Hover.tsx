import { motion } from "framer-motion";
interface Props {
  children: JSX.Element;
}

export const Hover = ({ children }: Props) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    {children}
  </motion.div>
);
