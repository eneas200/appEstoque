 
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `db_estoque_produtos` DEFAULT CHARACTER SET utf8 ;

use db_estoque_produtos;

CREATE TABLE IF NOT EXISTS `produtos` (

  `id_produto` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_produto` VARCHAR(255) NOT NULL,
  `preco_produto` DECIMAL(10,2) NOT NULL,
  `quantidade_produto` INT(11) NOT NULL,
  `marca_produto` VARCHAR(255) NOT NULL,
  `data_estoque_produto` DATETIME NOT NULL,
  PRIMARY KEY (`id_produto`)
  
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `fornecedor` (

  `id_fornecedor` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_empresa` VARCHAR(255) NOT NULL,
  `nome_intermediador` VARCHAR(200) NOT NULL,
  `email_fornecedor` VARCHAR(255) NOT NULL,
  `urlsite` TEXT NOT NULL,
  PRIMARY KEY (`id_fornecedor`)
  
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `funcionario` (

  `id_funcionario` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_funcionario` VARCHAR(150) NOT NULL,
  `email_funcionario` VARCHAR(255) NOT NULL,
  `senha_funcionario` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_funcionario`)
  
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `produto_baixa` (

	`id_produto_baixa` INT(11) NOT NULL AUTO_INCREMENT,
	`quantidade_baixa` VARCHAR(45) NOT NULL,
	`data_baixa` DATETIME NOT NULL,
	`fk_produto` INT(11) NOT NULL,
	`fk_funcionario` INT(11) NOT NULL,
	PRIMARY KEY (`id_produto_baixa`),
    FOREIGN KEY (`fk_produto`) REFERENCES produtos(`id_produto`)
	ON DELETE NO ACTION 
    ON UPDATE NO ACTION,
    FOREIGN KEY (`fk_funcionario`) REFERENCES funcionario(id_funcionario)
	ON DELETE NO ACTION 
    ON UPDATE NO ACTION
    
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS produto_tem_fornecedor (
	
    `primary_produto` INT(11) NOT NULL,
	`primary_fornecedor` INT(11) NOT NULL,
	FOREIGN KEY (`primary_produto`) REFERENCES `produtos` (`id_produto`)
	ON DELETE CASCADE
	ON UPDATE CASCADE,  
	FOREIGN KEY (`primary_fornecedor`) REFERENCES fornecedor (id_fornecedor)
	ON DELETE CASCADE
	ON UPDATE CASCADE
    
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
