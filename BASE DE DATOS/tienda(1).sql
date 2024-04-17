-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 17-04-2024 a las 17:39:16
-- Versión del servidor: 8.2.0
-- Versión de PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `desarrolladora`
--

DROP TABLE IF EXISTS `desarrolladora`;
CREATE TABLE IF NOT EXISTS `desarrolladora` (
  `ID` int NOT NULL,
  `Desarrolladora` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `desarrolladora`
--

INSERT INTO `desarrolladora` (`ID`, `Desarrolladora`) VALUES
(1, 'Team Cherry'),
(2, 'Black Salt Games'),
(3, 'Garage Heathen'),
(4, 'Consumer Softproduct'),
(5, 'Lucas Pope');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `editorial`
--

DROP TABLE IF EXISTS `editorial`;
CREATE TABLE IF NOT EXISTS `editorial` (
  `ID` int NOT NULL,
  `NombreEditorial` text NOT NULL,
  `NumeroDeTitulos` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `editorial`
--

INSERT INTO `editorial` (`ID`, `NombreEditorial`, `NumeroDeTitulos`) VALUES
(301, 'Microsoft', 3),
(302, 'Sony', 2),
(303, 'EA', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `editorials`
--

DROP TABLE IF EXISTS `editorials`;
CREATE TABLE IF NOT EXISTS `editorials` (
  `id` int NOT NULL,
  `nombre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `juegos_en_tienda` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `editorials`
--

INSERT INTO `editorials` (`id`, `nombre`, `juegos_en_tienda`) VALUES
(1, 'Zacatrus', 1),
(2, 'Libellud', 1),
(3, 'Tranjis Games', 1),
(4, 'Z-Man Games', 1),
(5, 'Devir', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` varchar(225) NOT NULL,
  `fecha_contratacion` date NOT NULL,
  `salario` decimal(10,2) NOT NULL,
  `cargo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellido`, `correo`, `telefono`, `direccion`, `fecha_contratacion`, `salario`, `cargo`) VALUES
(1, 'Carlos', 'Gonzalez', 'carlos@gmail.com', '124-226-333', 'Av.Libertador 123', '2023-01-15', 2500.00, 'Gerente'),
(2, 'Ana', 'Lopez', 'ana@hotmail.com', '192-273-945', 'Calle 456', '2023-02-20', 1800.00, 'Vendedor'),
(3, 'Pedro', 'Rodriguez', 'pedro@gmail.com', '123-594-190', 'Av.Bolivar 789', '2023-03-10', 2000.00, 'Cajero'),
(4, 'Ramiro', 'Gutierrez', 'RamirG@hotmail.com', '102-591-145', 'Av.Camargo 234', '2023-05-10', 2000.00, 'Almacen');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encargos`
--

DROP TABLE IF EXISTS `encargos`;
CREATE TABLE IF NOT EXISTS `encargos` (
  `id` int NOT NULL,
  `id_cliente` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  `total_venta` decimal(10,2) NOT NULL,
  `fecha_venta` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `encargos`
--

INSERT INTO `encargos` (`id`, `id_cliente`, `id_producto`, `cantidad`, `total_venta`, `fecha_venta`) VALUES
(5, 1, 1, 2, 119.98, '2023-04-01 10:30:00'),
(6, 2, 2, 1, 49.99, '2023-05-15 14:15:00'),
(7, 3, 3, 3, 209.97, '2023-06-20 16:20:00'),
(8, 1, 2, 1, 49.99, '2023-07-10 09:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

DROP TABLE IF EXISTS `genero`;
CREATE TABLE IF NOT EXISTS `genero` (
  `ID` int NOT NULL,
  `Genero` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`ID`, `Genero`) VALUES
(1, 'Metroidvania'),
(2, 'Pesca'),
(3, 'Surrealismo'),
(4, 'Sátira'),
(5, 'Misterio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

DROP TABLE IF EXISTS `generos`;
CREATE TABLE IF NOT EXISTS `generos` (
  `ID` int NOT NULL,
  `Genero` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`ID`, `Genero`) VALUES
(5, 'Estrategia'),
(4, 'Rogue-Like'),
(3, 'RPG'),
(2, 'Abstracto'),
(1, 'Party');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `miembros`
--

DROP TABLE IF EXISTS `miembros`;
CREATE TABLE IF NOT EXISTS `miembros` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` varchar(225) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `miembros`
--

INSERT INTO `miembros` (`id`, `nombre`, `apellido`, `correo`, `telefono`, `direccion`) VALUES
(3, 'Luis', 'Martinez', 'luis@gmail.com', '789-012-346', 'Apartado Postal 456,Villa'),
(2, 'Maria', 'Gomez', 'maria@hotmail.com', '456-789-023', 'Avenida Principal,Pueblo'),
(1, 'Juan', 'Perez', 'juan12@gmail.com', '123-456-789', 'Calle 123,Ciudad'),
(4, 'Sergio', 'Torres', 'SergioT@gmail.com', '259-101-023', 'Calle 123,Ciudad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sagas`
--

DROP TABLE IF EXISTS `sagas`;
CREATE TABLE IF NOT EXISTS `sagas` (
  `ID` int NOT NULL,
  `NombreSaga` text NOT NULL,
  `NumeroDeTitulos` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `sagas`
--

INSERT INTO `sagas` (`ID`, `NombreSaga`, `NumeroDeTitulos`) VALUES
(201, 'Forza Horizon', 3),
(202, 'Gran Turismo', 2),
(203, 'F1', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `ID` int NOT NULL,
  `Nombre` text NOT NULL,
  `stock` int NOT NULL,
  `Genero` text NOT NULL,
  `Desarrollador` text NOT NULL,
  `Precio` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`ID`, `Nombre`, `stock`, `Genero`, `Desarrollador`, `Precio`) VALUES
(1, 'Hollow Knight', 19, 'Metroidvania', 'Team Cherry', 10),
(2, 'Dredge', 8, 'Pesca', 'Black Salt Games', 5),
(3, 'Who\'s Lila', 50, 'Surrealismo', 'Garage Heathen', 10),
(4, 'Cruelty Squad', 27, 'Sátira', 'Consumer Softproducts', 15),
(5, 'Return of the Obra Dinn', 6, 'Misterio', 'Lucas Pope', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stockconduccion`
--

DROP TABLE IF EXISTS `stockconduccion`;
CREATE TABLE IF NOT EXISTS `stockconduccion` (
  `ID` int NOT NULL,
  `Nombre` text NOT NULL,
  `Editorial` text NOT NULL,
  `Saga` text NOT NULL,
  `Precio` int NOT NULL,
  `Stock` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `stockconduccion`
--

INSERT INTO `stockconduccion` (`ID`, `Nombre`, `Editorial`, `Saga`, `Precio`, `Stock`) VALUES
(101, 'Forza Horizon 3', 'Microsoft', 'Forza Horizon ', 40, 3),
(102, 'Forza Horizon 4', 'Microsoft', 'Forza Horizon ', 50, 28),
(103, 'Forza Horizon 5', 'Microsoft', 'Forza Horizon ', 70, 176),
(104, 'Gran Turismo 5', 'Sony', 'Gran Turismo ', 25, 7),
(105, 'Gran Turismo 7', 'Sony', 'Gran Turismo ', 60, 168),
(106, 'F1 21', 'EA', 'F1 ', 20, 1),
(107, 'F1 22', 'EA', 'F1 ', 40, 14),
(108, 'F1 23', 'EA', 'F1', 60, 210);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stocks`
--

DROP TABLE IF EXISTS `stocks`;
CREATE TABLE IF NOT EXISTS `stocks` (
  `ID` int NOT NULL,
  `Nombre` text NOT NULL,
  `Unidades` int NOT NULL,
  `Genero` text NOT NULL,
  `Editorial` text NOT NULL,
  `Precio` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `stocks`
--

INSERT INTO `stocks` (`ID`, `Nombre`, `Unidades`, `Genero`, `Editorial`, `Precio`) VALUES
(1, 'Unanimo', 25, 'Party', 'Zacatrus', '13.95€'),
(4, 'Dixit', 25, 'Party Abstracto', 'Libellud', '29.50€'),
(2, 'Mini Rogue', 12, 'RPG Rogue-Like', 'Tranjis Games', '22.95€'),
(3, 'Pandemic', 39, 'Cooperativo', 'Z-Man Games', '29.99€'),
(5, 'Catan', 67, 'Estrategia', 'Devir', '45€');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
